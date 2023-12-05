const CACHE_NAME = "Uni-explore-V1";
const PRE_CACHED_RESOURCES = ["/", "index.css", "pwa.js"];

self.addEventListener("install", event => {
  event.waitUntil(preCacheResources());
  console.log("WORKER: install event in progress.");
});

self.addEventListener("activate", event => {
  console.log("WORKER: activate event in progress.");
});

self.addEventListener("fetch", event => {
  event.respondWith(returnCachedResource());
  console.log('WORKER: Fetching', event.request);
});

async function preCacheResources() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(PRE_CACHED_RESOURCES);
}

async function returnCachedResource() {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(event.request);

  if (cachedResponse) {
    return cachedResponse;
  } else {
    const fetchResponse = await fetch(event.request);
    await cache.put(event.request, fetchResponse.clone());
    return fetchResponse;
  }
}

