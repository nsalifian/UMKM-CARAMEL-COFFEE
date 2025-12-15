// galeri.js - Modul ES6 untuk halaman galeri

// 1) Menggunakan const & let (ES6)
const gambarProduk = document.querySelectorAll('.item-gambar');
const infoContainer = document.getElementById('info-produk');

// 2) Menggunakan Arrow Function (ES6)
const tampilkanNama = (nama) => {
    infoContainer.textContent = `Produk: ${nama}`;
};

// 3) Menggunakan Class (ES6)
class GaleriHandler {
    constructor(gambarList) {
        this.gambarList = gambarList;
    }

    init() {
        // 4) Menggunakan forEach (ES6 iterable method)
        this.gambarList.forEach((img) => {
            const nama = img.dataset.nama;

            // Event klik untuk menampilkan nama produk
            img.addEventListener('click', () => tampilkanNama(nama));

            // Event hover - menggunakan classList (diminta di soal)
            img.addEventListener('mouseover', () => {
                img.classList.add('hover-aktif');
            });

            img.addEventListener('mouseout', () => {
                img.classList.remove('hover-aktif');
            });
        });
    }
}

// 5) Menggunakan Export (ES6 Modules)
export const galeri = new GaleriHandler(gambarProduk);

// Auto-initialize (opsional)
document.addEventListener('DOMContentLoaded', () => {
    galeri.init();
});
