self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Netzwerk-Anfragen direkt durchreichen (damit Supabase-Daten & Updates immer aktuell bleiben)
self.addEventListener('fetch', (event) => {
  return;
});
