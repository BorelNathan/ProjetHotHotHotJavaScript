/* jshint esversion: 6 */

const cacheName = 'v1';

const cacheAssets = [
    'index.html',
    'documentation.html',
    'CSS/stylesheet.css',
    'JS/script.js'
];

self.addEventListener('install', (e) => {
    console.log('Service Worker: Installed');

    e.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e => {
    console.log ('service worker actif');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache != cacheName) {
                        console.log('Service Worker; Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});


self.addEventListener('fetch', e => {
    console.log('Service Worke: Fetching');
    e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
    );
});