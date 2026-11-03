/* 刷题总台 Service Worker：离线也能刷题
   v42 修复三处：
   1) 所有 HTML 页面（含 listening.html / notes-biochem.html / math-ocr.html）一律网络优先
      —— 之前只认 index.html，listening.html 被"缓存优先"永久钉死在旧版
   2) Range 请求直接放行，不拦截 —— 音频拖动进度条需要 206 分片，SW 回全量会破坏 seek
   3) 音视频/压缩包不进缓存 —— 45MB 音频塞 Cache Storage 会撑爆手机配额
   4) install 改为逐个缓存，单个文件失败不拖垮整个 SW
*/
const CACHE = 'shuati-v43';
const ASSETS = ['./', './index.html', './listening.html', './manifest.json', './icon-192.png', './icon-512.png', './pako.min.js', './img/glycolysis.svg', './img/tca.svg', './img/replication-fork.svg', './notes-biochem.html', './math-ocr.html',
  './vendor/katex/katex.min.css', './vendor/katex/katex.min.js', './vendor/katex/contrib/auto-render.min.js',
  './vendor/katex/fonts/KaTeX_Main-Regular.woff2', './vendor/katex/fonts/KaTeX_Main-Bold.woff2',
  './vendor/katex/fonts/KaTeX_Math-Italic.woff2', './vendor/katex/fonts/KaTeX_Math-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size1-Regular.woff2', './vendor/katex/fonts/KaTeX_Size2-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Size3-Regular.woff2', './vendor/katex/fonts/KaTeX_Size4-Regular.woff2',
  './vendor/katex/fonts/KaTeX_AMS-Regular.woff2', './vendor/katex/fonts/KaTeX_Caligraphraphic-Regular.woff2',
  './vendor/katex/fonts/KaTeX_Fraktur-Regular.woff2', './vendor/katex/fonts/KaTeX_Script-Regular.woff2',
  './vendor/katex/fonts/KaTeX_SansSerif-Regular.woff2', './vendor/katex/fonts/KaTeX_Typewriter-Regular.woff2'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.all(ASSETS.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isDocReq(req, u) {
  return req.mode === 'navigate' ||
    /\.html?$/i.test(u.pathname) ||
    u.pathname.endsWith('/');
}
function isBigMedia(u) {
  return /\.(mp3|m4a|wav|ogg|flac|aac|mp4|webm|apk|zip|7z|rar)$/i.test(u.pathname);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const u = new URL(req.url);
  if (u.origin !== location.origin) return;              // 只管自己的文件

  // 音视频/Range：完全交给浏览器直连，保证 206 分片与拖动进度条
  if (req.headers.has('range') || isBigMedia(u)) return;

  if (isDocReq(req, u)) {
    // 页面：网络优先，2.5 秒没响应就用缓存（保证更新及时 + 弱网能开）
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const r = await fetch(req, { signal: ctrl.signal });
        clearTimeout(timer);
        if (r && r.ok) cache.put(req, r.clone());
        return r;
      } catch (err) {
        return (await cache.match(req)) ||
               (await cache.match('./index.html')) ||
               new Response('离线且无缓存', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      }
    })());
    return;
  }

  // 图标等静态资源：先给缓存，同时后台拉新（stale-while-revalidate）
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const netP = fetch(req).then(r => {
      if (r && r.ok) cache.put(req, r.clone());
      return r;
    }).catch(() => null);
    if (cached) return cached;
    return (await netP) || new Response('', { status: 504 });
  })());
});
