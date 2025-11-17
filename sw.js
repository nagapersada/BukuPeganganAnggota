// *** PERUBAHAN: Nama cache diganti ke v3 untuk memaksa update ***
const CACHE_NAME = 'dvnp-portal-cache-v3';

// *** PERUBAHAN: Menambahkan 'manifest.json' ke daftar cache ***
const FILES_TO_CACHE = [
    './', // Halaman utama (root)
    './index.html', // Halaman utama
    './manifest.json', // <-- FILE MANIFEST BARU DITAMBAHKAN
    './LOGOTIMDVNP.png',
    './TIMDVNP.jpg',
    './icon-192x192.png',
    './icon-512x512.png',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap'
];

// Event 'install': Dipanggil saat Service Worker di-install
self.addEventListener('install', (event) => {
    console.log('ServiceWorker: Menginstall v3...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('ServiceWorker: Membuka cache v3 dan menyimpan file...');
                return cache.addAll(FILES_TO_CACHE);
            })
            .then(() => {
                console.log('ServiceWorker: Semua file v3 berhasil disimpan di cache.');
                return self.skipWaiting(); // Memaksa SW baru untuk aktif
            })
            .catch((err) => {
                console.error('ServiceWorker: Gagal menyimpan file v3 di cache', err);
            })
    );
});

// Event 'fetch': Dipanggil setiap kali ada permintaan jaringan
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    // Ditemukan di cache
                    return response;
                }

                // Tidak ada di cache, ambil dari jaringan
                return fetch(event.request)
                    .then((networkResponse) => {
                        // (Opsional) Simpan respons jaringan ke cache untuk nanti
                        if (networkResponse && networkResponse.status === 200) {
                            const clonedResponse = networkResponse.clone();
                            caches.open(CACHE_NAME).then(cache => {
                                cache.put(event.request, clonedResponse);
                            });
                        }
                        return networkResponse;
                    })
                    .catch(() => {
                        console.error('ServiceWorker: Gagal mengambil dari jaringan.');
                        // (Opsional) kembalikan halaman offline fallback jika ada
                    });
            })
    );
});

// Event 'activate': Dipanggil saat Service Worker diaktifkan
// Ini adalah waktu yang baik untuk membersihkan cache lama (v2)
self.addEventListener('activate', (event) => {
    console.log('ServiceWorker: Mengaktifkan v3...');
    // Daftar cache yang ingin dipertahankan (hanya v3)
    const cacheWhitelist = [CACHE_NAME]; 

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Jika nama cache BUKAN v3, hapus
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log(`ServiceWorker: Menghapus cache lama: ${cacheName}`);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('ServiceWorker v3 aktif dan cache lama dibersihkan.');
            return self.clients.claim(); // Ambil kontrol halaman
        })
    );
});
