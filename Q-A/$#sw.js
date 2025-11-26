const CACHE_NAME = 'dvnp-qa-v8'; // <-- VERSI BARU (v8)
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json', // <-- Pastikan manifest.json juga di-cache
    './images/1000171790.jpg', 
    './images/1000173031.jpg', 
    './images/new_background_image.jpg', // <-- Gambar background baru
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    
    // Daftar 32 audio
    './audio/jawaban1.mp3',
    './audio/jawaban2.mp3',
    './audio/jawaban3.mp3',
    // ... (dan seterusnya sampai 32) ...
    './audio/jawaban30.mp3',
    './audio/jawaban31.mp3',
    './audio/jawaban32.mp3'
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
