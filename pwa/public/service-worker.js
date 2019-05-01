var dataCacheName = 'pwa';
var cacheName = 'pwa';
var filesToCache = [
    "/",
    "/pwa",
    "/pwa/public/index.html",
    "/pwa/public/favicon.ico",
    "/pwa/src/App.js",
    "/pwa/src/App.css",
    "/pwa/src/Index.css",
    "/pwa/src/pages/Questionnaire.js",
    "/pwa/src/pages/Success.js",
    "/pwa/src/pages/Welcome.js",
    "/pwa/src/pages/NotFound.js"
];

// install
self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

// fetch
self.addEventListener('fetch', function (event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
                // Cache hit - return response
                /*
                if (response) {
                    console.log("logged url:" + response.url);
                    return response;
                }

                return fetch(event.request, { mode: 'cors' });
                */
               return response || fetch(event.request);
            }
            )
    );
});


// activate
self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});


/*
// Background sync
self.addEventListener('sync', function (event) {
  if (event.tag === 'image-fetch') {
    event.waitUntil(fetchImage());
  }
});


More sync stuff
The code uses the Fetch API to retrieve an image from the server.
It will return a promise indicating if it was successful or if it failed with the HTTP response.

function fetchImage() {
  fetch('./tree.jpg')
    .then(function (response) {
      return response;
    })
    .then(function (text) {
      console.log('Request successful', text);
    })
    .catch(function (error) {
      console.log('Request failed', error);
    });
}

*/