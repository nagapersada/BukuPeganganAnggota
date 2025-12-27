// *** VERSI FINAL v10: Update nama cache ini agar HP otomatis update ***
const CACHE_NAME = 'dvnp-portal-cache-v15-final';

// Daftar file inti
const FILES_TO_CACHE = [
    './', 
    './index.html', 
    './manifest.json',
    './LOGOTIMDVNP.png',
    './TIMDVNP.jpg',
    './icon-192x192.png',
    './icon-512x512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap'
];

// INSTALL: Simpan file ke cache dengan paksa (no-store) agar dapat versi terbaru
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                const fetchOptions = { cache: 'no-store' };
                const requests = FILES_TO_CACHE.map(url => new Request(url, fetchOptions));
                return Promise.all(requests.map(req => 
                    fetch(req).then(res => {
                        if (res.ok) return cache.put(req, res);
                    }).catch(err => console.warn('Cache fail:', req.url))
                ));
            })
            .then(() => self.skipWaiting()) // Langsung aktifkan service worker baru
    );
});

// ACTIVATE: Hapus cache versi lama (v9, v8, dll)
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Menghapus cache lama:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Ambil alih kontrol halaman segera
    );
});

// FETCH: Strategi Cache First, Fallback Network
self.addEventListener('fetch', (event) => {
    // Hanya tangani request GET
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // 1. Coba ambil dari cache dulu
                if (response) return response;
                
                // 2. Jika tidak ada, ambil dari internet
                return fetch(event.request).catch(() => {
                    // Jika offline dan gagal fetch, biarkan (atau bisa return halaman offline custom)
                });
            })
    );
});
