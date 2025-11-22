const CACHE_NAME = 'buku-digital-cache-v1';
// Daftar semua file yang perlu disimpan
const urlsToCache = [
    '/',
    'index.html',
    'manifest.json',
    'dvteam-logo.png',
    '1000167342.png',
    '1000167341.jpg',
    '1000167340.jpg',
    '1000167339.jpg',
    '1000167338.jpg',
    '1000167334.jpg',
    '1000167337.jpg',
    '1000167336.jpg',
    '1000167335.jpg',
    '1000167324.jpg',
    'icons/icon-192x192.png',
    'icons/icon-512x512.png',
    
    // === FILE BARU DIPERBARUI DI BAWAH INI ===
    '1000168517.png', // Nama file diperbarui dari 1000168451.png
    '1000168510.png'
];

// Event install: Buka cache dan tambahkan semua file di atas
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                // Hati-hati: Jika salah satu file gagal di-cache, instalasi akan gagal
                // Pastikan semua nama file di atas sudah benar dan ada di server
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.error('Failed to cache files:', err);
            })
    );
});

// Event fetch: Ambil dari cache dulu, kalau tidak ada baru ambil dari network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Jika ada di cache, kembalikan dari cache
                if (response) {
                    return response;
                }
                // Jika tidak, ambil dari network
                return fetch(event.request);
            }
        )
    );
});

// Event activate: Hapus cache lama jika ada
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
