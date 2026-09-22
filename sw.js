// Safe Service Worker for PWA Installability
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// An active fetch listener satisfies Chrome's PWA criteria
// without interfering with or breaking page loading
self.addEventListener('fetch', (event) => {
  // Let the browser handle fetches normally
});
