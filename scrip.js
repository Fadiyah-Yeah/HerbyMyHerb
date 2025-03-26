const pertanyaan = [
    //0
    {
        soal: "🌅 Saat fajar menyingsing dan cahaya matahari pertama menyentuh kastilmu, bagaimana kamu memulai harimu?",
        jawaban: {
            a: { text: "🍵 Menyeduh teh herbal yang menenangkan dan bermeditasi.", skor: { A: 1 } },
            b: { text: "🏃‍♂️ Keluar dari kastil dan memulai latihan sihir pagi dengan semangat.", skor: { B: 1 } },
        },
    },
    //1
    {
        soal: "🌿 Kamu memiliki kebun sihir pribadi yang penuh tanaman magis. Apa yang pertama kali kamu lakukan di sana?",
        jawaban: {
            c: { text: "🌱 Merawat tanaman herbal yang diwariskan dari generasi sebelumnya.", skor: { C: 1 } },
            d: { text: "🛡️ Memeriksa tanaman pelindung dan memperkuat mantra perlindungan.", skor: { D: 1 } },
        },
    },
    //2
    {
        soal: "🕊️ Saat membuka jendela, burung magis datang membawa pesan untukmu. Apa reaksimu?",
        jawaban: {
            a: { text: "🤲 Menyapa dengan lembut dan merasakan ketenangannya.", skor: { A: 1 } },
            b: { text: "📜 Segera membaca pesannya dengan penuh rasa ingin tahu.", skor: { B: 1 } },
        },
    },
    //3
    {
        soal: "🏡 Hari ini, kamu diundang untuk membantu seorang penyihir tua di desa. Apa yang kamu lakukan?",
        jawaban: {
            c: { text: "💞 Menemaninya bercerita dan membantunya meramu obat dari resep kuno.", skor: { C: 1 } },
            d: { text: "🔮 Memeriksa pertahanan rumahnya dan menambahkan mantra perlindungan.", skor: { D: 1 } },
        },
    },
    //4
    {
        soal: "🐉 Dalam perjalanan pulang, kamu bertemu makhluk magis yang meminta bantuan. Bagaimana kamu merespons?",
        jawaban: {
            a: { text: "🧚 Menggunakan sihir penyembuhan untuk menyegarkan energinya.", skor: { A: 1 } },
            b: { text: "🔥 Memberikan makhluk itu dorongan semangat agar tetap kuat.", skor: { B: 1 } },
        },
    },
    //5
    {
        soal: "📖 Saat kembali ke kastil, kamu melihat sekumpulan penyihir muda sedang berlatih. Apa yang akan kamu ajarkan kepada mereka?",
        jawaban: {
            c: { text: "📜 Cara memahami sejarah sihir dan menghormati para leluhur.", skor: { C: 1 } },
            d: { text: "🛡️ Teknik mantra pertahanan agar mereka bisa melindungi diri.", skor: { D: 1 } },
        },
    },
    //6
    {
        soal: "🌇 Saat matahari terbenam, seorang teman penyihirmu datang meminta nasihat. Apa yang kamu lakukan?",
        jawaban: {
            a: { text: "☯️ Memberinya ruang untuk berbicara dan menenangkannya.", skor: { A: 1 } },
            b: { text: "⚡ Memotivasinya untuk percaya pada instingnya dan mengambil langkah berani.", skor: { B: 1 } },
        },
    },
    //7
    {
        soal: "🌠 Malam tiba, dan di langit terlihat bintang jatuh. Apa permohonanmu?",
        jawaban: {
            c: { text: "🌙 Semoga kenangan dan hubungan baik selalu terjaga.", skor: { C: 1 } },
            d: { text: "🛡️ Semoga aku bisa terus melindungi orang-orang yang kusayangi.", skor: { D: 1 } },
        },
    },
    //8
    {
        soal: "📚 Sebelum tidur, kamu memutuskan untuk membaca sebuah buku sihir. Buku mana yang kamu pilih?",
        jawaban: {
            a: { text: "📖 Kitab harmoni dan kedamaian yang mengajarkan keseimbangan.", skor: { A: 1 } },
            b: { text: "🔮 Buku petualangan dan eksplorasi sihir baru.", skor: { B: 1 } },
        },
    },
    //9
    {
        soal: "🚪 Tiba-tiba, ada ketukan misterius di pintu kastilmu. Apa yang kamu lakukan?",
        jawaban: {
            c: { text: "🏰 Mengenali energinya terlebih dahulu sebelum bertindak.", skor: { C: 1 } },
            d: { text: "🔒 Menyiapkan mantra perlindungan sebelum membuka pintu.", skor: { D: 1 } },
        },
    },
    //10
    {
        soal: "🔮 Penyihir agung muncul dari balik pintu dan memberimu satu benda magis. Apa yang kamu pilih?",
        jawaban: {
            a: { text: "🕊️ Kristal kedamaian yang dapat menenangkan hati siapapun yang menyentuhnya.", skor: { A: 1 } },
            b: { text: "⚔️ Jubah kekuatan yang membuatmu berani menghadapi setiap tantangan.", skor: { B: 1 } },
        },
    },
    //11
    {
        soal: "✨ Kamu diberi kesempatan untuk mengubah satu hal dalam dunia sihir. Apa yang kamu lakukan?",
        jawaban: {
            c: { text: "🔮 Memperkuat hubungan antar penyihir agar lebih harmonis.", skor: { C: 1 } },
            d: { text: "🏹 Membangun pertahanan yang lebih kuat untuk melindungi dunia sihir.", skor: { D: 1 } },
        },
    },
    //12
    {
        soal: "📜 Sebelum tidur, kamu menuliskan satu mantra terakhir untuk hari ini. Apa isi mantramu?",
        jawaban: {
            a: { text: "✍️ Semoga esok membawa kedamaian dan keseimbangan bagi semua makhluk.", skor: { A: 1 } },
            b: { text: "✍️ Semoga esok penuh keberanian dan tantangan yang akan membentukku menjadi lebih kuat.", skor: { B: 1 } },
        },
    }
];

const hasil = {
    AAA: { text: "🌿 Lavender - Kamu adalah penyihir yang tenang, damai, dan penuh keseimbangan.", image: "L.jpeg" },
    BAC: { text: "🌻 Calendula - Kamu adalah penyihir penuh keceriaan, kehangatan, dan rasa syukur.", image: "G.jpeg" },
    BBD: { text: "🔥 Borage - Kamu memiliki keberanian besar dan tidak takut menghadapi tantangan.", image: "B.jpeg" },
    CCC: { text: "🌹 Rosemary - Kamu menghargai kenangan, cinta, dan kesetiaan di atas segalanya.", image: "R.jpeg" },
    DCA: { text: "🌱 Basil - Kamu memiliki keinginan baik, cinta, serta kemampuan melindungi dan menyembuhkan.", image: "B2.jpeg" },
    DCB: { text: "🍃 Mint - Kesetiaan dan persahabatan adalah nilai utama yang kamu junjung tinggi.", image: "M.jpeg" }
};

let pertanyaanAwal = 0;
let userJaw = { A: 0, B: 0, C: 0, D: 0 };

function tampilkanPertanyaan() {
    const element = document.getElementById("quiz");
    if (!element) {
        console.error("Elemen quiz tidak ditemukan!");
        return;
    }

    const soal = pertanyaan[pertanyaanAwal];
    let html = `<div class="soal-container">`;

    if (soal) {
        html += `<p>${soal.soal}</p>`;
        for (const key in soal.jawaban) {
            html += `<button class="large-rectangular" value="${key}">${soal.jawaban[key].text}</button>`;
        }
        html += `</div>`;
        element.innerHTML = html;

        // Tambahkan animasi perpindahan dengan scroll
        element.scrollIntoView({ behavior: "smooth", block: "center" });
    } else {
        console.error("Tidak ada pertanyaan yang ditemukan!");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("mulai").addEventListener("click", function () {
        document.getElementById("pageAwal").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        pertanyaanAwal = 0;
        userJaw = { A: 0, B: 0, C: 0, D: 0 };
        tampilkanPertanyaan();
    });

    document.getElementById("ulang").addEventListener("click", loop);
});

// Event delegation untuk menangkap klik tombol jawaban
document.getElementById("quiz").addEventListener("click", function (e) {
    if (e.target.classList.contains("large-rectangular")) {
        Ans(e);
    }
});

function Ans(e) {
    const opsi = e.target.value;
    const pert = pertanyaan[pertanyaanAwal];
    const jaw = pert.jawaban[opsi];

    // Tambahkan skor ke userJaw
    for (const kategori in jaw.skor) {
        userJaw[kategori] += jaw.skor[kategori];
    }

    if (pertanyaanAwal < pertanyaan.length - 1) {
        pertanyaanAwal++;

        // Animasi perpindahan ke soal berikutnya
        document.getElementById("quiz").classList.add("fade-out");
        setTimeout(() => {
            tampilkanPertanyaan();
            document.getElementById("quiz").classList.remove("fade-out");
        }, 500);
    } else {
        console.log("Kuis selesai, memproses hasil...");
        setTimeout(() => {
            hasilAkhir();
        }, 500);
    }
}

function hasilAkhir() {
    const element = document.getElementById("hasil");
    const gambar = document.getElementById("gambar");
    const teksHasil = document.getElementById("teksHasil");

    if (!element || !gambar || !teksHasil) {
        console.error("Elemen hasil tidak ditemukan!");
        return;
    }

    // Tentukan hasil berdasarkan tiga kategori dengan skor tertinggi
    let sortedKeys = Object.keys(userJaw).sort((a, b) => userJaw[b] - userJaw[a]);
    let hasilops = sortedKeys.slice(0, 3).join(""); // Ambil tiga huruf dengan skor tertinggi

    console.log("Hasil terpilih:", hasilops);
    console.log("Skor pengguna:", userJaw);

    // Gunakan hasil AAA sebagai fallback jika hasil tidak ditemukan
    const akhir = hasil[hasilops] || hasil["AAA"];

    if (akhir) {
        gambar.src = "img/" + akhir.image;
        teksHasil.textContent = akhir.text;
        element.style.display = "block";
        gambar.style.display = "block";
        document.getElementById("ulang").style.display = "block";
    } else {
        console.error("Hasil tidak ditemukan!");
    }

    // Pastikan kuis disembunyikan setelah hasil muncul
    document.getElementById("quiz").style.display = "none";
}

function loop() {
    pertanyaanAwal = 0;
    userJaw = { A: 0, B: 0, C: 0, D: 0 };
    document.getElementById("quiz").style.display = "block";
    document.getElementById("hasil").style.display = "none";
    document.getElementById("gambar").style.display = "none";
    document.getElementById("ulang").style.display = "none";
    tampilkanPertanyaan();
}

// CSS untuk animasi swipe dan fade
const style = document.createElement("style");
style.innerHTML = `
    .fade-out {
        opacity: 0;
        transform: translateX(-20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .soal-container {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
`;
document.head.appendChild(style);
