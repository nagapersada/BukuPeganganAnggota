// Nama cache
const CACHE_NAME = 'dvnp-portal-cache-v1';

// Daftar file yang akan di-cache
// Termasuk file utama, gambar, dan aset eksternal
const FILES_TO_CACHE = [
    './', // Halaman utama (root)
    './index.html', // Halaman utama
    './LOGOTIMDVNP.png',
    './TIMDVNP.jpg',
    './icon-192x192.png',
    './icon-512x512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap'
];

// Event 'install': Dipanggil saat Service Worker di-install
self.addEventListener('install', (event) => {
    console.log('ServiceWorker: Menginstall...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('ServiceWorker: Membuka cache dan menyimpan file...');
                // Menyimpan semua file dalam FILES_TO_CACHE
                return cache.addAll(FILES_TO_CACHE);
            })
            .then(() => {
                console.log('ServiceWorker: Semua file berhasil disimpan di cache.');
                // Aktifkan Service Worker segera setelah install
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('ServiceWorker: Gagal menyimpan file di cache', err);
            })
    );
});

// Event 'fetch': Dipanggil setiap kali ada permintaan jaringan (mis. load gambar, CSS, dll)
self.addEventListener('fetch', (event) => {
    // Kita gunakan strategi "cache-first"
    // Ini berarti browser akan cek cache dulu
    // Jika ada, gunakan dari cache. Jika tidak, baru ambil dari jaringan.
    
    // Hanya untuk permintaan GET
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Jika file ada di cache, kembalikan dari cache
                if (response) {
                    console.log(`ServiceWorker: Mengambil dari cache: ${event.request.url}`);
                    return response;
                }

                // Jika tidak ada di cache, ambil dari jaringan
                console.log(`ServiceWorker: Mengambil dari jaringan: ${event.request.url}`);
                return fetch(event.request)
                    .then((networkResponse) => {
                        // (Opsional tapi bagus) Simpan respons jaringan ke cache untuk nanti
                        // Kita perlu meng-clone respons karena respons hanya bisa dibaca sekali
                        const clonedResponse = networkResponse.clone();
                        caches.open(CACHE_NAME).then(cache => {
                            // Hanya cache jika respons-nya valid
                            if (networkResponse.status === 200) {
                                cache.put(event.request, clonedResponse);
                            }
                        });
                        return networkResponse;
                    })
                    .catch(() => {
                        // Jika jaringan gagal (offline) dan tidak ada di cache
                        console.error('ServiceWorker: Gagal mengambil dari jaringan dan tidak ada di cache.');
                        // Anda bisa mengembalikan halaman offline kustom di sini jika punya
                    });
            })
    );
});

// Event 'activate': Dipanggil saat Service Worker diaktifkan
// Ini adalah waktu yang baik untuk membersihkan cache lama
self.addEventListener('activate', (event) => {
    console.log('ServiceWorker: Mengaktifkan...');
    const cacheWhitelist = [CACHE_NAME]; // Hanya simpan cache dengan nama ini

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Jika nama cache tidak ada di whitelist, hapus
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log(`ServiceWorker: Menghapus cache lama: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Ambil kontrol atas halaman yang terbuka
            return self.clients.claim();
        })
    );
});
