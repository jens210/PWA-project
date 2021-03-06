if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([]);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

        // Cache first strategy
        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

        // Background sync 
        const bgSyncPlugin = new workbox.backgroundSync.Plugin('Questionnaire Background Sync', {
            maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
        });

        // have a look at this https://developers.google.com/web/tools/workbox/modules/workbox-background-sync
        workbox.routing.registerRoute(
           "/api/answers",
            new workbox.strategies.NetworkOnly({
                plugins: [bgSyncPlugin]
            }),
            'POST'
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}