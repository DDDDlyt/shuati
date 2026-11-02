/**
 * 刷题总台专属 Worker —— 个人账号版（两层安全）
 *   第一层：Cloudflare Access（邮箱验证）拦在门外，连页面都打不开
 *   第二层：本 Worker 的个人账号系统（用户名+密码，数据只在你 KV 里）
 * 绑定 ddddlyt.top 后，所有接口走 https://ddddlyt.top/api/*
 *
 * 环境变量（部署时在 Worker 设置里配，绝不写进代码）：
 *   AI_KEY         智谱 GLM 视觉模型 Key（免费，国内直连）
 *   SESSION_SECRET 随机长字符串，给会话令牌签名（部署时生成一次，丢了所有登录失效）
 *   ACCESS_EMAIL   可选：你的邮箱。配了就强制请求必须过 Cloudflare Access 且邮箱匹配
 *
 * KV 绑定：DATA（命名空间 shuati-data，id=234a505aab7b4516aacfd88e6c2b7aea）
 *
 * KV 结构：
 *   acc:owner            → 唯一账号的用户名
 *   acc:user:<username>  → {"salt","hash"}（PBKDF2-SHA256，10万次迭代，Cloudflare 上限）
 *   sync:<username>      → 该用户的学习数据（任意 JSON 字符串，上限 8MB）
 */

const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: JSON_HEADERS });
}
function preflight() {
  return new Response(null, { status: 204, headers: JSON_HEADERS });
}

/* 前端静态托管：HTML 存 KV（site:index.html），其余资源反代 GitHub Pages 源站 /shuati/ */
async function serveStatic(request, env, url) {
  const p = url.pathname;
  if (p === '/' || p === '/index.html') {
    const html = await env.DATA.get('site:index.html');
    if (!html) return new Response('site not built', { status: 503 });
    return new Response(html, {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-cache' },
    });
  }
  if (p === '/sw.js') {
    const body = "self.addEventListener('install',e=>self.skipWaiting());self.addEventListener('activate',e=>e.waitUntil((async()=>{try{var k=await caches.keys();await Promise.all(k.map(x=>caches.delete(x)));}catch(e){}try{await self.registration.unregister();}catch(e){}await self.clients.claim();})()));";
    return new Response(body, {
      status: 200,
      headers: { 'Content-Type': 'application/javascript', 'Cache-Control': 'no-cache' },
    });
  }
  const target = 'https://ddddlyt.github.io/shuati' + (p || '/');
  try {
    const r = await fetch(target, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Encoding': 'identity' } });
    const ct = r.headers.get('Content-Type') || 'application/octet-stream';
    return new Response(r.body, {
      status: r.status,
      headers: { 'Content-Type': ct, 'Cache-Control': 'public, max-age=86400' },
    });
  } catch (e) {
    return new Response('proxy error: ' + e, { status: 502 });
  }
}

/* ---------- 编解码 / 哈希工具 ---------- */
const enc = new TextEncoder();
const dec = new TextDecoder();

function b64urlEncode(str) {
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlEncodeBytes(bytes) {
  let s = '';
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}
function b64urlDecode(str) {
  str = str.replace(/-/g, '+').replace(/_/g, '/');
  while (str.length % 4) str += '=';
  return atob(str);
}
function bytesToHex(bytes) {
  return [...bytes].map((x) => x.toString(16).padStart(2, '0')).join('');
}
function bytesFromHex(hex) {
  const out = new Uint8Array(hex.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
  return out;
}
function randomHex(n) {
  const b = new Uint8Array(n);
  crypto.getRandomValues(b);
  return bytesToHex(b);
}
async function hashPassword(pw, saltHex) {
  const km = await crypto.subtle.importKey('raw', enc.encode(pw), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: bytesFromHex(saltHex), iterations: 100000, hash: 'SHA-256' },
    km, 256
  );
  return bytesToHex(new Uint8Array(bits));
}

/* HMAC-SHA256 + 会话令牌 */
async function hmac(data, secret) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return b64urlEncodeBytes(new Uint8Array(sig));
}
async function signToken(payload, secret) {
  const data = b64urlEncode(JSON.stringify(payload));
  return data + '.' + (await hmac(data, secret));
}
function constantTimeEq(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= (a.charCodeAt(i) ^ b.charCodeAt(i));
  return r === 0;
}
async function verifyToken(token, secret) {
  if (!token || !token.includes('.')) return null;
  const [d, s] = token.split('.');
  const expect = await hmac(d, secret);
  if (!constantTimeEq(s, expect)) return null;
  let payload;
  try { payload = JSON.parse(b64urlDecode(d)); } catch (e) { return null; }
  if (!payload.exp || payload.exp < Date.now()) return null;
  return payload;
}

/* 第一层：Cloudflare Access 邮箱校验（未配 ACCESS_EMAIL 则不强制，便于本地调试） */
function accessOk(request, env) {
  if (!env.ACCESS_EMAIL) return true;
  const e = request.headers.get('CF-Access-Authenticated-User-Email');
  return !!e && e.toLowerCase() === String(env.ACCESS_EMAIL).toLowerCase();
}

async function readJson(request) {
  try { return await request.json(); } catch (e) { return null; }
}
async function loadSubs(env, user) {
  const raw = await env.DATA.get('sub:' + user);
  if (!raw) return [];
  try { const a = JSON.parse(raw); return Array.isArray(a) ? a : []; } catch (e) { return []; }
}
function validName(u) { return typeof u === 'string' && /^[A-Za-z0-9_]{4,32}$/.test(u); }
function validPw(p) { return typeof p === 'string' && p.length >= 8 && p.length <= 128; }

const TOKEN_TTL = 1000 * 60 * 60 * 24 * 30; // 30 天

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return preflight();
    const url = new URL(request.url);
    const path = url.pathname;

    /* 非 /api/ 请求：由 Worker 托管前端（HTML 走 KV，静态资源反代 GitHub Pages） */
    if (!path.startsWith('/api/')) {
      return await serveStatic(request, env, url);
    }

    /* 健康检查（不强制 Access，供链路探测） */
    if (path === '/api/ping') return json({ ok: true, t: Date.now() });

    /* 账号是否已初始化 */
    if (path === '/api/setup-status') {
      const owner = await env.DATA.get('acc:owner');
      return json({ ok: true, setup: !!owner });
    }

    /* 首次初始化唯一账号（之后禁止再建） */
    if (path === '/api/setup' && request.method === 'POST') {
      if (!accessOk(request, env)) return json({ ok: false, error: '未通过 Cloudflare Access 验证' }, 403);
      if (await env.DATA.get('acc:owner')) return json({ ok: false, error: '账号已初始化，禁止重复创建' }, 403);
      const b = await readJson(request);
      if (!b || !validName(b.username) || !validPw(b.password))
        return json({ ok: false, error: '用户名4-32位(字母数字_)，密码至少8位' }, 400);
      const salt = randomHex(16);
      const hash = await hashPassword(b.password, salt);
      await env.DATA.put('acc:user:' + b.username, JSON.stringify({ salt, hash }));
      await env.DATA.put('acc:owner', b.username);
      const token = await signToken({ u: b.username, exp: Date.now() + TOKEN_TTL }, env.SESSION_SECRET);
      return json({ ok: true, token, user: b.username });
    }

    /* 登录 */
    if (path === '/api/login' && request.method === 'POST') {
      if (!accessOk(request, env)) return json({ ok: false, error: '未通过 Cloudflare Access 验证' }, 403);
      const b = await readJson(request);
      if (!b || !validName(b.username) || !validPw(b.password))
        return json({ ok: false, error: '用户名或密码格式不对' }, 400);
      const raw = await env.DATA.get('acc:user:' + b.username);
      if (!raw) return json({ ok: false, error: '用户名或密码错误' }, 401);
      const rec = JSON.parse(raw);
      if ((await hashPassword(b.password, rec.salt)) !== rec.hash)
        return json({ ok: false, error: '用户名或密码错误' }, 401);
      const token = await signToken({ u: b.username, exp: Date.now() + TOKEN_TTL }, env.SESSION_SECRET);
      return json({ ok: true, token, user: b.username });
    }

    /* 以下接口都需要登录令牌 */
    const auth = request.headers.get('Authorization') || '';
    const m = auth.match(/^Bearer\s+(.+)$/i);
    const payload = m ? await verifyToken(m[1], env.SESSION_SECRET) : null;
    if (!payload) return json({ ok: false, error: '未登录或登录已过期' }, 401);
    if (!accessOk(request, env)) return json({ ok: false, error: '未通过 Cloudflare Access 验证' }, 403);

    /* 当前账号 */
    if (path === '/api/me' && request.method === 'GET') {
      return json({ ok: true, user: payload.u });
    }

    /* 学习数据同步（按账号隔离） */
    if (path === '/api/sync') {
      const key = 'sync:' + payload.u;
      if (request.method === 'GET') {
        const raw = await env.DATA.get(key);
        if (!raw) return json({ ok: true, data: null });
        let obj = null; try { obj = JSON.parse(raw); } catch (e) {}
        return json({ ok: true, data: obj });
      }
      if (request.method === 'PUT' || request.method === 'POST') {
        let body;
        try { body = await request.text(); } catch (e) { return json({ ok: false, error: '读不到请求体' }, 400); }
        if (!body || body.length > 8 * 1024 * 1024) return json({ ok: false, error: '数据为空或超过 8MB 限制' }, 413);
        await env.DATA.put(key, body);
        return json({ ok: true, bytes: body.length, t: Date.now() });
      }
      return json({ ok: false, error: '不支持的方法' }, 405);
    }

    /* 投稿箱（按账号隔离，存 KV 列表） */
    if (path === '/api/sub' && request.method === 'GET') {
      const arr = await loadSubs(env, payload.u);
      return json({ ok: true, items: arr });
    }
    if (path === '/api/sub' && request.method === 'POST') {
      const b = await readJson(request);
      if (!b || !b.fname) return json({ ok: false, error: '缺少文件名' }, 400);
      const arr = await loadSubs(env, payload.u);
      const item = {
        id: randomHex(12),
        fname: String(b.fname).slice(0, 200),
        ftype: String(b.ftype || '').slice(0, 100),
        fsize: Number(b.fsize) || 0,
        note: String(b.note || '').slice(0, 100),
        content: String(b.content || ''),
        at: Date.now(),
      };
      arr.unshift(item);
      if (arr.length > 50) arr.length = 50;
      await env.DATA.put('sub:' + payload.u, JSON.stringify(arr));
      return json({ ok: true, item });
    }
    if (path.startsWith('/api/sub/') && request.method === 'DELETE') {
      const id = path.slice('/api/sub/'.length);
      let arr = await loadSubs(env, payload.u);
      arr = arr.filter((x) => x.id !== id);
      await env.DATA.put('sub:' + payload.u, JSON.stringify(arr));
      return json({ ok: true });
    }

    /* AI 视觉批改中转（key 只在服务端，网页永远看不到） */
    if (path === '/api/ai' && request.method === 'POST') {
      const req = await readJson(request);
      if (!req) return json({ ok: false, error: 'JSON 解析失败' }, 400);
      const image = req.image || '';
      const prompt = req.prompt || '';
      if (!image) return json({ ok: false, error: '没有图片' }, 400);
      if (!env.AI_KEY) return json({ ok: false, error: 'Worker 还没配 AI_KEY' }, 500);
      const r = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + env.AI_KEY },
        body: JSON.stringify({
          model: req.model || 'glm-4.6v-flash',
          messages: [{
            role: 'user',
            content: [
              { type: 'image_url', image_url: { url: image } },
              { type: 'text', text: prompt || '识别图中手写内容并逐条批改。' },
            ],
          }],
          max_tokens: 2048,
        }),
      });
      const text = await r.text();
      return new Response(text, { status: r.status, headers: JSON_HEADERS });
    }

    return json({ ok: false, error: 'not found' }, 404);
  },
};
