const CACHE = "pvoc2-static-v1";
const CORE = [
  "./",
  "./index.html",
  "./exam.html",
  "./parta.html",
  "./partb.html",
  "./questions.html",
  "./mock.html",
  "./wrongbook.html",
  "./cheatsheet.html",
  "./sources.html",
  "./about.html",
  "./assets/css/style.css",
  "./assets/js/app.js",
  "./assets/js/data.js",
  "./assets/js/quiz.js",
  "./assets/js/mock.js",
  "./assets/js/storage.js",
  "./assets/icons/pvoc2-icon.svg",
  "./assets/icons/iala-region-a.svg",
  "./data/questions.json"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(CORE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
  );
  self.clients.claim();
});

async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  const network = fetch(request)
    .then((response) => {
      if (response && response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || network;
}

async function cacheFirst(request) {
  const cache = await caches.open(CACHE);
  const cached = await cache.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) cache.put(request, response.clone());
  return response;
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate" || url.pathname.endsWith(".html")) {
    event.respondWith(staleWhileRevalidate(request));
    return;
  }
  event.respondWith(cacheFirst(request));
});
