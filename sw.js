/* 刷题总台 Service Worker：离线也能刷题 */
const CACHE = 'shuati-v37';
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
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (u.origin !== location.origin) return;          // 只管自己的文件
  const isPage = u.pathname.endsWith('index.html') || u.pathname.endsWith('/shuati/') || u.pathname.endsWith('/shuati');
  if (isPage) {
    // 页面：网络优先，断网用缓存（保证更新及时、断网能开）
    e.respondWith(
      fetch(e.request).then(r => {
        const cp = r.clone();
        caches.open(CACHE).then(c => c.put(e.request, cp));
        return r;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
    );
    return;
  }
  // 图标等静态资源：缓存优先
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(r2 => {
      const cp = r2.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp));
      return r2;
    }))
  );
});
