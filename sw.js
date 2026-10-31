/* 刷题总台 Service Worker：离线也能刷题 */
const CACHE = 'shuati-v24';
const ASSETS = ['./', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './pako.min.js'];

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
