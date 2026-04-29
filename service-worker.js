const CACHE_NAME = 'myby-universe-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon/logo.png',
  '/icon/logo-192.png',
  '/icon/logo-512.png',
  '/icon/favicon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
