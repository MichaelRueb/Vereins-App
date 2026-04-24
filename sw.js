self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Muss vorhanden sein, damit Chrome die PWA erkennt
  e.respondWith(fetch(e.request));
});
