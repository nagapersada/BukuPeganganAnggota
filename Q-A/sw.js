const CACHE_NAME = 'dvnp-qa-v11'; // <-- UPDATE KE V11
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json', 
    './images/1000171790.jpg', 
    './images/1000173031.jpg', 
    './images/new_background_image.jpg', 
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    
    // Daftar Audio 1 - 32
    './audio/jawaban1.mp3',
    './audio/jawaban2.mp3',
    './audio/jawaban3.mp3',
    './audio/jawaban4.mp3',
    './audio/jawaban5.mp3',
    './audio/jawaban6.mp3',
    './audio/jawaban7.mp3',
    './audio/jawaban8.mp3',
    './audio/jawaban9.mp3',
    './audio/jawaban10.mp3',
    './audio/jawaban11.mp3',
    './audio/jawaban12.mp3',
    './audio/jawaban13.mp3',
    './audio/jawaban14.mp3',
    './audio/jawaban15.mp3',
    './audio/jawaban16.mp3',
    './audio/jawaban17.mp3',
    './audio/jawaban18.mp3',
    './audio/jawaban19.mp3',
    './audio/jawaban20.mp3',
    './audio/jawaban21.mp3',
    './audio/jawaban22.mp3',
    './audio/jawaban23.mp3',
    './audio/jawaban24.mp3',
    './audio/jawaban25.mp3',
    './audio/jawaban26.mp3',
    './audio/jawaban27.mp3',
    './audio/jawaban28.mp3',
    './audio/jawaban29.mp3',
    './audio/jawaban30.mp3',
    './audio/jawaban31.mp3',
    './audio/jawaban32.mp3',

    // Daftar Audio Baru (33 - 38)
    './audio/jawaban33.mp3',
    './audio/jawaban34.mp3',
    './audio/jawaban35.mp3',
    './audio/jawaban36.mp3',
    './audio/jawaban37.mp3',
    './audio/jawaban38.mp3'
];

// Event Install:
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache dibuka');
                const promises = urlsToCache.map(url => {
                    return cache.add(url).catch(err => {
                        console.warn('Gagal cache:', url, err);
                    });
                });
                return Promise.all(promises);
            })
            .then(() => self.skipWaiting()) 
    );
});

// Event Activate:
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) 
    );
});

// Event Fetch:
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request).catch(err => {
                    console.error('Fetch gagal:', err);
                });
            }
        )
    );
});
