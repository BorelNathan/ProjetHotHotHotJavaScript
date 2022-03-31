var cache_1 = "cachepwa";



self.addEventListener('install', function(c) {

    c.waitUntil(caches.open(cache_1).then(function(cache){
        cache.addAll(['/sw.js','/index.html'

        ]);
    }));

    });

    self.addEventListener('activate', function(c) {
        console.log ('service worker actif')
    });






