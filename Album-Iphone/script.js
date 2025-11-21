document.addEventListener('DOMContentLoaded', () => {

    // Daftar Lagu (DIPERBARUI DENGAN LIRIK)
    // 
    // PENTING: GANTI "..." DENGAN LIRIK LAGU ANDA
    // Gunakan `\n` untuk membuat baris baru
    //
    const songs = [
        { 
            name: 'Api Sang Naga', 
            path: 'audio/apisangnaga.mp3', 
            lyrics: "[Verse 1]\nIni bukan sekadar mimpi, ini edukasi!\nMembentuk mental, berpikir positif\nSatu visi, satu barisan, ini kerjasama\nLangkah tak terhenti, kita tetap konsisten!\n\n[Pre-Chorus]\nTak peduli mereka bilang apa!\nTahan ejekan, mental kita baja!\nKami berani, menatap dunia!\n\n[Chorus]\nTim Divi bangkit dan menyala!\nKami adalah juara!\nPantang menyerah, NEVER GIVE UP!\nTak pernah kalah, kami adalah pemenang!\n\n[Verse 2]\nEjekan mereka? Itu bensin kita!\nMakin dihina, makin kita gila!\nBuktikan pada dunia, kita bukan pecundang\nLihat kami di puncak, sebagai pemenang!\n\n[Pre-Chorus]\nTak peduli mereka bilang apa!\nTahan ejekan, mental kita baja!\nKami berani, menatap dunia!\n\n[Chorus]\nTim Divi bangkit dan menyala!\nKami adalah juara!\nPantang menyerah, NEVER GIVE UP!\nTak pernah kalah, kami adalah pemenang!\n\n[Bridge]\nHEY.. KAU PARA PEJUANG..!!\nKAU BUKAN PECUNDANG..!!\nLIHAT TAJAM KEDEPAN..!!\nRAIHLAH APA YANG MENJADI HAK KITA..!!\n\n[Chorus]\nTim Divi bangkit dan menyala!\nKami adalah juara!\nPantang menyerah, NEVER GIVE UP!\nTak pernah kalah, kami adalah pemenang!\n\n[Outro]\nDIVI NAGA PERSADA!\nPEMENANG!\nDIVI NAGA PERSADA!\nSANG JUARA!"
        },
        { 
            name: 'Tim DV NP', 
            path: 'audio/Tim DV NP.mp3', 
            lyrics: "[Verse 1]\nKami bukan kerumunan, kami satu legiun\nDisatukan oleh visi, takkan pernah runtuh\nPendobrak tradisi, pencari solusi\nKami adalah mentalitas sang juara sejati\n\n[Pre-Chorus]\nDarah naga di dalam jiwa\nApi yang takkan pernah padam jua!\n\n[Chorus]\nKAMI ADALAH! DIVI NAGA PERSADA!\nSebuah kekuatan, yang tak terkalahkan!\nKAMI ADALAH! DIVI NAGA PERSADA!\nSimbol perlawanan, tak terhentikan!\n\n[Verse 2]\nKami adalah tim yang ditempa edukasi\nDibangun oleh integritas, bertindak konsisten\nSatu garis komando, kerjasama yang solid\nTak peduli rintangan, kami tetap di depan!\n\n[Pre-Chorus]\nDarah naga di dalam jiwa\nApi yang takkan pernah padam jua!\n\n[Chorus]\nKAMI ADALAH! DIVI NAGA PERSADA!\nSebuah kekuatan, yang tak terkalahkan!\nKAMI ADALAH! DIVI NAGA PERSADA!\nSimbol perlawanan, tak terhentikan!\n\n[Bridge]\nKami adalah badai!\nKami adalah bukti!\nKami adalah jawaban!\nKami adalah takdir sang pemenang!\n\n[Chorus]\nKAMI ADALAH! DIVI NAGA PERSADA!\nSebuah kekuatan, yang tak terkalahkan!\nKAMI ADALAH! DIVI NAGA PERSADA!\nSimbol perlawanan, tak terhentikan!\n\n[Outro]\nDIVI NAGA PERSADA!\n(Teriak)\nDIVI NAGA PERSADA!" 
        },
        { 
            name: 'Leader Tim', 
            path: 'audio/Leader Tim.mp3', 
            lyrics: "[Verse 1]\nSatu suara di depan, membelah lautan badai\nDialah sang pelopor, penunjuk arah sejati\nBukan sekadar bicara, dia ada di garis depan\nMembawa panji naga, tak pernah ragu di jalan\n\n[Pre-Chorus]\nJantung tim berdetak\nDalam satu komandonya!\nApi visi menyala!\n\n[Chorus]\nDIALAH SANG LEADER! Jantung Divi Naga!\nPembawa obor api, penjaga visi kita!\nDIALAH SANG LEADER! Satu dalam arahan!\nMengubah keraguan, menjadi kemenangan!\n\n[Verse 2]\nDia yang mengedukasi, membentuk mental baja\nSaat yang lain menyerah, dia tetap percaya\nMenjadi perisai tim, menahan semua gempuran\nDia adalah arsitek, pondasi perjuangan!\n\n[Pre-Chorus]\nJantung tim berdetak\nDalam satu komandonya!\nApi visi menyala!\n\n[Chorus]\nDIALAH SANG LEADER! Jantung Divi Naga!\nPembawa obor api, penjaga visi kita!\nDIALAH SANG LEADER! Satu dalam arahan!\nMengubah keraguan, menjadi kemenangan!\n\n[Bridge]\nSATU VISI! (teriak)\nSATU HATI! (teriak)\nSATU KOMANDO! (teriak)\nRAIH KEMENANGAN! (teriak)\n\n[Chorus]\nDIALAH SANG LEADER! Jantung Divi Naga!\nPembawa obor api, penjaga visi kita!\nDIALAH SANG LEADER! Satu dalam arahan!\nMengubah keraguan, menjadi kemenangan!\n\n[Outro]\nSANG LEADER!\n(teriak)\nDIVI NAGA!\n(teriak)\nSANG LEADER!" 
        },
        { 
            name: 'Ketua Tim', 
            path: 'audio/Ketua Tim.mp3', 
            lyrics: "[Verse 1]\nMerekalah sang mentor, perpanjangan komando\nBukan hanya memberi perintah, mereka ikut maju!\nMereka ada di sisimu, saat kau merasa bimbang\nMerekalah yang mendampingi, saat kau diserang!\n\n[Pre-Chorus]\nTak ada yang dibiarkan, tertinggal sendirian!\nMereka adalah jawaban, di setiap keraguan!\n\n[Chorus]\nMEREKA KETUA TIM! Divi Naga Persada!\nPara pembimbing di garis depan medan laga!\nKENAPA IKUTI MEREKA? Karena mereka adalah jembatan!\nMenuju kesuksesan, yang kita impikan!\n\n[Verse 2]\nSaat sistem terasa berat, mereka yang bantu\nSaat motivasi padam, mereka sulut apimu\nMengawal edukasi, memastikan kau paham\nMerekalah yang menjagamu, tetap tajam dan kejam!\n\n[Pre-Chorus]\nTak ada yang dibiarkan, tertinggal sendirian!\nMereka adalah jawaban, di setiap keraguan!\n\n[Chorus]\nMEREKA KETUA TIM! Divi Naga Persada!\nPara pembimbing di garis depan medan laga!\nKENAPA IKUTI MEREKA? Karena mereka adalah jembatan!\nMenuju kesuksesan, yang kita impikan!\n\n[Bridge]\nDENGAR MEREKA! (teriak)\nPERCAYA MEREKA! (teriak)\nIKUTI MEREKA! (teriak)\nKITA PASTI MENANG!\n\n[Chorus]\nMEREKA KETUA TIM! Divi Naga Persada!\nPara pembimbing di garis depan medan laga!\nKENAPA IKUTI MEREKA? Karena mereka adalah jembatan!\nMenuju kesuksesan, yang kita impikan!\n\n[Outro]\nKETUA TIM!\n(teriak)\nDIVI NAGA!\n(teriak)\nSANG PEMBIMBING!" 
        },
        { 
            name: 'Anggota DV NP', 
            path: 'audio/Anggota DV NP.mp3', 
            lyrics: "[Verse 1]\nKamilah para pejuang, generasi terpilih\nBukan sekadar pengikut, kami adalah bukti\nBerjalan dalam barisan, di bawah panji naga\nSatu nafas perjuangan, mentalitas sang juara\n\n[Pre-Chorus]\nTahan ejekan! Mental baja!\nKami adalah nyala!\n\n[Chorus]\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nPara eksekutor, di medan laga!\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nBerani, konsisten, dan pantang menyerah!\n\n[Verse 2]\nKami adalah pembelajar, berpikir positif\nDididik untuk menang, tak pernah defensif\nSatu tim, satu suara, hancurkan keraguan\nKami adalah kerjasama, yang tak bisa dikalahkan!\n\n[Pre-Chorus]\nTahan ejekan! Mental baja!\nKami adalah nyala!\n\n[Chorus]\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nPara eksekutor, di medan laga!\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nBerani, konsisten, dan pantang menyerah!\n\n[Bridge]\nKami adalah pejuang!\nKami bukan pecundang!\nKami adalah pemenang!\nKAMI DIVI NAGA PERSADA!\n\n[Chorus]\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nPara eksekutor, di medan laga!\nKAMI ANGGOTA TIM! DIVI NAGA PERSADA!\nBerani, konsisten, dan pantang menyerah!\n\n[Outro]\nANGGOTA TIM!\n(teriak)\nDIVI NAGA!\n(teriak)\nSANG JUARA!" 
        },
        { 
            name: 'Support System', 
            path: 'audio/Support system .mp3', 
            lyrics: "[Verse 1]\nIni bukan sekadar alat, ini mesin perang!\nPondasi baja, sistem yang telah dirancang\nSemua data, strategi, dan edukasi\nDigital terintegrasi, satu solusi pasti!\n\n[Pre-Chorus]\nTak perlu meraba, dalam kegelapan!\nAkselerasi penuh, ini adalah jawaban!\n\n[Chorus]\nINI SUPPORT SYSTEM! Divi Naga Persada!\nJalan tol-mu menuju tahta sang juara!\nUNTUK APA? Hancurkan keraguan!\nKENAPA HARUS PAKAI? Untuk jaminan kemenangan!\n\n[Verse 2]\nIni adalah blueprint, peta kesuksesan\nBukan kerja sendirian, ini kerja tim!\nMenyaring semua ejekan, membuang kegagalan\nKita bergerak cepat, tak buang waktu di jalan!\n\n[Pre-Chorus]\nJangan berjalan buta, jangan buang waktumu!\nIkuti sistemnya, raih takdirmu!\n\n[Chorus]\nINI SUPPORT SYSTEM! Divi Naga Persada!\nJalan tol-mu menuju tahta sang juara!\nUNTUK APA? Hancurkan keraguan!\nKENAPA HARUS PAKAI? Untuk jaminan kemenangan!\n\n[Bridge]\nKau tak berjuang sendiri!\nAda sistem yang menopang!\nIni adalah kunci!\nIni jalur cepat!\nPASTI KITA MENANG!\n\n[Chorus]\nINI SUPPORT SYSTEM! Divi Naga Persada!\nJalan tol-mu menuju tahta sang juara!\nUNTUK APA? Hancurkan keraguan!\nKENAPA HARUS PAKAI? Untuk jaminan kemenangan!\n\n[Outro]\nSUPPORT SYSTEM!\n(teriak)\nDIVI NAGA!\n(teriak)\nPASTI JAYA!" 
        },
        { 
            name: 'Alat-alat Tim DVNP', 
            path: 'audio/Alat-alat Tim DVNP.mp3', 
            lyrics: "[Verse 1]\nKita tak berperang buta, kita bawa amunisi!\nSenjata telah teruji, di dalam genggaman!\nYang pertama: Buku Digital! Ini peta perang kita!\nSemua data dan ilmu, semua ada di sana!\n\n[Pre-Chorus]\nTak ada lagi keraguan, tak ada lagi buta!\nIni adalah amunisi, untuk raih semua!\n\n[Chorus]\nBUKU DIGITAL! Senjata edukasi!\nBENEFIT PLAN! Rencana yang pasti!\nBUKU COMPOUNDING! Kekuatan sejati!\nINI ARSENAL KITA, DIVI NAGA PERSADA!\n\n[Verse 2]\nYang kedua: Benefit Plan! Lihat masa depanmu!\nIni adalah tujuan, ini adalah hakmu!\nDan Buku Compounding! Cara kita melipatganda!\nKekuatan finansial, takkan pernah sirna!\n\n[Pre-Chorus]\nTak ada lagi keraguan, tak ada lagi buta!\nIni adalah amunisi, untuk raih semua!\n\n[Chorus]\nBUKU DIGITAL! Senjata edukasi!\nBENEFIT PLAN! Rencana yang pasti!\nBUKU COMPOUNDING! Kekuatan sejati!\nINI ARSENAL KITA, DIVI NAGA PERSADA!\n\n[Bridge]\nEDUKASI! (teriak)\nSTRATEGI! (teriak)\nMELIPATGANDA! (teriak)\nSENJATA KITA UNTUK JAYA!\n\n[Chorus]\nBUKU DIGITAL! Senjata edukasi!\nBENEFIT PLAN! Rencana yang pasti!\nBUKU COMPOUNDING! Kekuatan sejati!\nINI ARSENAL KITA, DIVI NAGA PERSADA!\n\n[Outro]\nSENJATA KITA!\n(teriak)\nDIVI NAGA!\n(teriak)\nPASTI MENANG!" 
        },
        { 
            name: 'Metode Kerja', 
            path: 'audio/Metode Kerja.mp3', 
            lyrics: "[Verse 1]\nIni adalah langkah awal, cetak biru kita!\nMetode kerja profesional, tertanam di dada!\nBukan sekadar aturan, ini adalah identitas!\nCara kita bergerak, hancurkan semua batas!\n\n[Pre-Chorus]\nTiga pilar utama!\nTiga fondasi sukses!\nIni adalah rahasia, cara kita berproses!\n\n[Chorus]\nINILAH DNA NAGA! Langkah awal sang juara!\nTiga fondasi sukses, terpatri di dalam jiwa!\nINILAH DNA NAGA! Metode kerja kita!\nProfesional, tajam, dan takkan terkalahkan!\n\n[Verse 2]\nFondasi satu: Kita konsultan! Memberi solusi nyata!\nBukan penjual paksaan, kita adalah mitra!\nFondasi dua: Bicara ke hati! Bukan sekadar ke telinga!\nSentuh jiwa mereka, itu senjata utama kita!\n\n[Pre-Chorus]\nTiga pilar utama!\nTiga fondasi sukses!\nIni adalah rahasia, cara kita berproses!\n\n[Chorus]\nINILAH DNA NAGA! Langkah awal sang juara!\nTiga fondasi sukses, terpatri di dalam jiwa!\nINILAH DNA NAGA! Metode kerja kita!\nProfesional, tajam, dan takkan terkalahkan!\n\n[Bridge]\nDUPLIKASI! (Sederhana!)\nMUDAH DIINGAT! (Selamanya!)\nMUDAH DIAJARKAN! (Pada semua!)\nINI CARA KITA! PASTI JAYA!\n\n[Chorus]\nINILAH DNA NAGA! Langkah awal sang juara!\nTiga fondasi sukses, terpatri di dalam jiwa!\nINILAH DNA NAGA! Metode kerja kita!\nProfesional, tajam, dan takkan terkalahkan!\n\n[Outro]\nDNA NAGA!\n(teriak)\nDNA NAGA!\n(teriak)\nSANG JUARA!" 
        },
        { 
            name: 'Penjaga Api Suci', 
            path: 'audio/Penjaga Api Suci.mp3', 
            lyrics: "[Verse 1]\nAku adalah sang Penjaga Obor!\nDi tanganku api suci berkobar!\nMenerjang gelapnya stagnasi, menghancurkan keputusasaan!\nTakkan kubiarkan satu jiwa pun tertinggal dalam kegelapan!\n\n[Pre-Chorus]\nIni adalah sumpah! Ini tugas kemanusiaan!\nIni adalah perang, menuju kebebasan!\n\n[Chorus]\nDUA JIWA SETIAP BULAN! Obor harus menyala!\nTarik mereka dari gelap, menuju cahaya benderang!\nINI MISI KEMANUSIAAN! Hancurkan stagnasi!\nBEBAS FINANSIAL! Adalah takdir yang pasti! MENGGELEGAR!\n\n[Verse 2]\nSetiap langkah adalah pertolongan!\nSetiap jiwa adalah kemenangan!\nKita adalah tentara cahaya, melawan tirani finansial!\nMenyalakan harapan baru, dengan semangat yang brutal!\n\n[Pre-Chorus]\nIni adalah sumpah! Ini tugas kemanusiaan!\nIni adalah perang, menuju kebebasan!\n\n[Chorus]\nDUA JIWA SETIAP BULAN! Obor harus menyala!\nTarik mereka dari gelap, menuju cahaya benderang!\nINI MISI KEMANUSIAAN! Hancurkan stagnasi!\nBEBAS FINANSIAL! Adalah takdir yang pasti! MENGGELEGAR!\n\n[Bridge]\nPENJAGA OBOR! (teriak)\nNYALAKAN API! (teriak)\nHANCURKAN GELAP! (teriak)\nBEBASKAN MEREKA! (teriak)\n\n[Chorus]\nDUA JIWA SETIAP BULAN! Obor harus menyala!\nTarik mereka dari gelap, menuju cahaya benderang!\nINI MISI KEMANUSIAAN! Hancurkan stagnasi!\nBEBAS FINANSIAL! Adalah takdir yang pasti! MENGGELEGAR!\n\n[Outro]\nOBOR MENYALA!\n(teriak)\nSTAGNASI SIRNA!\n(teriak)\nBEBAS FINANSIAL!" 
        },
        { 
            name: 'Edifikasi & Duplikasi', 
            path: 'audio/Edifikasi & Duplikasi.mp3', 
            lyrics: "[Verse 1]\nDengar, seluruh pejuang! Ini satu komando!\nSatu perintah menggema, hancurkan semua ego!\nKita punya cetak biru, kita punya senjata!\nJangan ada yang melenceng, jangan ada yang buta!\n\n[Pre-Chorus]\nIni bukan pilihan, ini adalah keharusan!\nSatu suara, satu sistem, hancurkan keraguan!\n\n[Chorus]\nAJARKAN! SAMPAIKAN! EDIFIKASI SYSTEM!\nSupport System Naga Persada, jangan kau padamkan!\nINI KUNCI DUPLIKASI! Yang hasilkan pertumbuhan!\nJadikan ini nafasmu, raih KESUKSESAN! MENGGELEGAR!\n\n[Verse 2]\nHentikan cara liar, hentikan kerja sendiri!\nKita adalah tim profesional, yang punya identitas!\nSistem adalah darah kita, sistem adalah jalur cepat!\nAjarkan yang sama, agar semua melesat!\n\n[Pre-Chorus]\nIni bukan pilihan, ini adalah keharusan!\nSatu suara, satu sistem, hancurkan keraguan!\n\n[Chorus]\nAJARKAN! SAMPAIKAN! EDIFIKASI SYSTEM!\nSupport System Naga Persada, jangan kau padamkan!\nINI KUNCI DUPLIKASI! Yang hasilkan pertumbuhan!\nJadikan ini nafasmu, raih KESUKSESAN! MENGGELEGAR!\n\n[Bridge]\nTUGAS KITA! (AJARKAN!)\nTUGAS KITA! (SAMPAIKAN!)\nTUGAS KITA! (EDIFIKASI!)\nHASILNYA? (DUPLIKASI! PERTUMBUHAN! KESUKSESAN!)\n\n[Chorus]\nAJARKAN! SAMPAIKAN! EDIFIKASI SYSTEM!\nSupport System Naga Persada, jangan kau padamkan!\nINI KUNCI DUPLIKASI! Yang hasilkan pertumbuhan!\nJadikan ini nafasmu, raih KESUKSESAN! MENGGELEGAR!\n\n[Outro]\nSUPPORT SYSTEM!\n(teriak)\nNAGA PERSADA!\n(teriak)\nKUNCI DUPLIKASI!" 
        }
    ];

    // Ambil Elemen DOM
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');
    const enterBtn = document.getElementById('enterBtn');
    const backBtn = document.getElementById('backBtn');
    
    const audioPlayer = document.getElementById('audioPlayer');
    const playlistElement = document.getElementById('playlist');
    const nowPlayingElement = document.getElementById('nowPlaying');

    // ELEMEN BARU UNTUK LIRIK
    const showLyricsBtn = document.getElementById('showLyricsBtn');
    const lyricsOverlay = document.getElementById('lyricsOverlay');
    const closeLyricsBtn = document.getElementById('closeLyricsBtn');
    const lyricsTitle = document.getElementById('lyricsTitle'); // <-- JUDUL LIRIK
    const lyricsContent = document.getElementById('lyricsContent');

    let currentSongIndex = -1;

    // 1. Buat Daftar Playlist di HTML
    function populatePlaylist() {
        songs.forEach((song, index) => {
            const li = document.createElement('li');
            li.textContent = song.name;
            li.dataset.index = index;
            
            li.addEventListener('click', () => {
                playSong(index);
            });
            
            playlistElement.appendChild(li);
        });
    }

    // 2. Fungsi untuk Memutar Lagu
    function playSong(index) {
        if (index < 0 || index >= songs.length) return;

        currentSongIndex = index;
        const song = songs[index];
        
        audioPlayer.src = song.path;
        audioPlayer.play();
        
        nowPlayingElement.textContent = `Now Playing: ${song.name}`;
        
        // PERBARUI KONTEN LIRIK (meskipun tersembunyi)
        lyricsTitle.innerText = song.name; // <-- Mengisi Judul
        lyricsContent.innerText = song.lyrics; // <-- Mengisi Lirik

        // Tandai lagu yang aktif
        document.querySelectorAll('#playlist li').forEach((li, i) => {
            if (i === index) {
                li.classList.add('active');
            } else {
                li.classList.remove('active');
            }
        });
    }

    // 3. Pindah ke lagu berikutnya saat selesai
    audioPlayer.addEventListener('ended', () => {
        let nextIndex = currentSongIndex + 1;
        if (nextIndex >= songs.length) {
            nextIndex = 0; // Kembali ke lagu pertama
        }
        playSong(nextIndex);
    });

    // 4. Navigasi Slide (Perbaikan untuk iPhone)
    enterBtn.addEventListener('click', () => {
        slide1.classList.remove('active');
        slide2.classList.add('active');
        
        if(currentSongIndex === -1) {
             playSong(0); // Diizinkan oleh iPhone
        }
    });

    backBtn.addEventListener('click', () => {
        slide2.classList.remove('active');
        slide1.classList.add('active');
    });

    // 5. FUNGSI BARU UNTUK LIRIK
    showLyricsBtn.addEventListener('click', () => {
        let songToShow;
        if (currentSongIndex === -1) {
            // Jika belum ada lagu diputar, ambil lirik lagu pertama
            songToShow = songs[0];
        } else {
            // Jika sudah ada lagu diputar, ambil lirik lagu saat ini
            songToShow = songs[currentSongIndex];
        }
        
        lyricsTitle.innerText = songToShow.name; // <-- Mengisi Judul
        lyricsContent.innerText = songToShow.lyrics; // <-- Mengisi LLirik
        
        lyricsOverlay.classList.remove('hidden');
    });

    closeLyricsBtn.addEventListener('click', () => {
        lyricsOverlay.classList.add('hidden');
    });


    // Inisialisasi
    populatePlaylist();
});
