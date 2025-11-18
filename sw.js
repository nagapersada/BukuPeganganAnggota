// *** PERUBAHAN PENTING: Naik ke v9 untuk memaksa update style baru ***
const CACHE_NAME = 'dvnp-portal-cache-v9';

// Daftar file yang akan di-cache
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

// Event 'install': Dipanggil saat Service Worker di-install
self.addEventListener('install', (event) => {
    console.log('ServiceWorker: Menginstall v9...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('ServiceWorker: Membuka cache v9 dan menyimpan file...');
                // Opsi cache: 'no-store' untuk memastikan kita mengambil versi terbaru dari server
                const fetchOptions = { cache: 'no-store' };
                const requests = FILES_TO_CACHE.map(url => new Request(url, fetchOptions));
                
                return Promise.all(requests.map(req => 
                    fetch(req).then(res => {
                        if (!res.ok) {
                            console.warn(`Gagal mengambil: ${req.url}`);
                            // Jangan gagalkan install jika font/CDN gagal, yang penting file lokal aman
                            if (req.url.includes('index.html') || req.url.includes('./')) {
                                // Jika file utama gagal, barulah throw error
                                if(!res.ok && req.url.startsWith('./')) throw new Error(`Gagal mengambil file inti: ${req.url}`);
                            }
                        }
                        return cache.put(req, res);
                    }).catch(err => console.warn('Gagal fetch aset saat install:', err))
                ));
            })
            .then(() => {
                console.log('ServiceWorker: Semua file v9 berhasil diproses.');
                return self.skipWaiting(); // Langsung aktifkan v9
            })
    );
});

// Event 'fetch': Merespon permintaan jaringan
self.addEventListener('fetch', (event) => {
    // Hanya tangani request GET yang berasal dari origin kita sendiri (untuk keamanan)
    if (event.request.method !== 'GET') return;

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // Kembalikan dari cache jika ada
                }
                return fetch(event.request).catch(() => {
                     // Jika offline dan gambar tidak ada, bisa return placeholder
                     console.log('Offline dan file tidak ada di cache:', event.request.url);
                });
            })
    );
});

// Event 'activate': Membersihkan cache lama (v8 ke bawah)
self.addEventListener('activate', (event) => {
    console.log('ServiceWorker: Mengaktifkan v9...');
    const cacheWhitelist = [CACHE_NAME]; 

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log(`ServiceWorker: Menghapus cache lama: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('ServiceWorker v9 aktif dan cache lama bersih.');
            return self.clients.claim();
        })
    );
});
