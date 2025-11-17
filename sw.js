// *** PERUBAHAN FINAL: Nama cache diganti ke v8 ***
const CACHE_NAME = 'dvnp-portal-cache-v8';

// Daftar file yang akan di-cache
const FILES_TO_CACHE = [
    './', // Halaman utama (root)
    './index.html', // Halaman utama (SANGAT PENTING agar versi baru di-cache)
    './manifest.json', // Manifest baru
    './LOGOTIMDVNP.png',
    './TIMDVNP.jpg',
    './icon-192x192.png',
    './icon-512x512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap'
];

// Event 'install': Dipanggil saat Service Worker di-install
self.addEventListener('install', (event) => {
    console.log('ServiceWorker: Menginstall v8...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('ServiceWorker: Membuka cache v8 dan menyimpan file...');
                const fetchOptions = { cache: 'no-store' };
                const requests = FILES_TO_CACHE.map(url => new Request(url, fetchOptions));
                
                return Promise.all(requests.map(req => 
                    fetch(req).then(res => {
                        if (!res.ok) {
                            console.warn(`Gagal mengambil: ${req.url}`);
                            if (req.url.includes('index.html') || req.url.includes('./')) {
                                throw new Error(`Gagal mengambil file inti: ${req.url}`);
                            }
                        }
                        return cache.put(req, res);
                    })
                ));
            })
            .then(() => {
                console.log('ServiceWorker: Semua file v8 berhasil disimpan di cache.');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('ServiceWorker: Gagal menyimpan file v8 di cache', err);
            })
    );
});

// Event 'fetch': Merespon permintaan jaringan
self.addEventListener('fetch', (event) => {
    // Kita hanya menangani navigasi GET
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Jika ada di cache, kembalikan dari cache
                if (response) {
                    return response;
                }
                
                // Jika tidak, ambil dari jaringan, simpan ke cache, dan kembalikan
                return fetch(event.request).then((networkResponse) => {
                    // Cek jika response valid
                    if(!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                        return networkResponse;
                    }
                    
                    // Penting: Clone response.
                    const responseToCache = networkResponse.clone();
                    
                    caches.open(CACHE_NAME)
                        .then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                        
                    return networkResponse;
                }).catch(() => {
                    // Gagal mengambil dari jaringan (mungkin offline)
                    // Anda bisa tambahkan halaman offline di sini jika mau
                    console.warn('Gagal mengambil dari jaringan: ', event.request.url);
                });
            })
    );
});

// Event 'activate': Membersihkan cache lama
self.addEventListener('activate', (event) => {
    console.log('ServiceWorker: Mengaktifkan v8...');
    const cacheWhitelist = [CACHE_NAME]; // Hanya simpan cache v8

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Jika nama cache BUKAN v8, hapus
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log(`ServiceWorker: Menghapus cache lama: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('ServiceWorker v8 aktif dan cache lama dibersihkan.');
            return self.clients.claim();
        })
    );
});
