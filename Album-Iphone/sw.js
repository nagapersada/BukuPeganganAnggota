const CACHE_NAME = 'dvnp-motivation-v13'; // <-- VERSI BARU (v13)
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './manifest.json',
    './images/1000171790.jpg', 
    './images/1000173031.jpg', 
    './icons/icon-192x192.png',
    './icons/icon-512x512.png',
    
    // Daftar lengkap 10 lagu
    './audio/Leader Tim.mp3',
    './audio/Alat-alat Tim DVNP.mp3',
    './audio/Metode Kerja.mp3',
    './audio/Anggota DV NP.mp3',
    './audio/Tim DV NP.mp3',
    './audio/Support system .mp3',
    './audio/Ketua Tim.mp3',
    './audio/apisangnaga.mp3',
    './audio/Penjaga Api Suci.mp3', 
    './audio/Edifikasi & Duplikasi.mp3'
];

// Event Install: Menyimpan cache aset
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache dibuka');
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting()) // Paksa service worker baru untuk aktif
    );
});

// Event Activate: Membersihkan cache lama
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
        }).then(() => self.clients.claim()) // Ambil alih kontrol halaman
    );
});

// Event Fetch: Menyajikan aset dari cache jika ada
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Jika ada di cache, kembalikan dari cache
                if (response) {
                    return response;
                }
                // Jika tidak, ambil dari jaringan
                return fetch(event.request);
            }
        )
    );
});
