# Kertas Suara Digital – Simulasi Pilkades Ciater

Aplikasi simulasi e-voting berbasis HTML, CSS, dan JavaScript murni. Tidak memerlukan server atau database.

## Struktur file

```text
ciater_evote/
├── index.html
├── style.css
├── script.js
├── config.js
└── assets/
    ├── logo.png
    ├── foto_calon_1.jpg
    ├── foto_calon_2.jpg
    ├── foto_calon_3.jpg
    ├── foto_calon_4.jpg
    └── placeholder.jpg
```

## Menjalankan secara offline

1. Ekstrak folder aplikasi.
2. Klik dua kali `index.html` untuk membukanya di browser.
3. Untuk pengujian, pilih salah satu kandidat, tekan **PILIH KANDIDAT INI**, lalu konfirmasi.
4. Setelah halaman terima kasih muncul, tekan **ULANGI SIMULASI** untuk kembali ke surat suara dan mencoba kandidat lain. Anda dapat mengulang sebanyak yang diperlukan.

## Mengedit identitas dan kandidat

Buka `config.js` menggunakan Notepad atau editor teks. Ubah nilai di bagian `electionTitle`, `electionName`, `village`, `district`, `regency`, dan `term`.

Data kandidat berada di array `candidates`. Untuk setiap calon, edit:

- `number`: nomor urut
- `name`: nama calon
- `photo`: lokasi file foto
- `description`: keterangan singkat

Pastikan array tetap berisi tepat **4 kandidat**.

## Mengganti foto

1. Siapkan foto JPG atau PNG dengan posisi wajah jelas.
2. Simpan di folder `assets`.
3. Ganti foto lama atau ubah nilai `photo` di `config.js`, misalnya `photo: "assets/foto_iwan.jpg"`.
4. Untuk logo, ganti `assets/logo.png` dengan logo pilihan Anda (nama file tetap sama), atau ubah `logo` di `config.js`.

Foto calon nomor 3 menggunakan foto yang disertakan saat pembuatan aplikasi. Foto kandidat 1, 2, dan 4 merupakan placeholder dan perlu diganti.

## Mengubah warna dan teks tombol

Warna di `config.js` pada objek `theme`: `green`, `greenDark`, `gold`, `paper`, `ink`, dan `accent`.
Teks tombol dan pesan ada di objek `texts`, termasuk `choose`, `confirmQuestion`, `back`, `confirm`, `thankYou`, dan `subtitle`.

## Mengunggah ke GitHub Pages

1. Buat repository baru di GitHub.
2. Unggah seluruh isi folder aplikasi (file `index.html`, `style.css`, `script.js`, `config.js`, dan folder `assets`).
3. Buka **Settings → Pages** pada repository.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publikasi. GitHub akan menampilkan alamat situs Pages.

## Catatan penting

Aplikasi ini hanya simulasi. Mode sosialisasi tidak menggunakan `sessionStorage` dan tidak mengunci pemilihan; tombol **ULANGI SIMULASI** membawa pengguna kembali ke surat suara. Pilihan tidak disimpan secara permanen. Jangan gunakan aplikasi statis ini untuk pemungutan suara resmi karena tidak memiliki autentikasi pemilih, server pencatatan, audit, atau perlindungan terhadap manipulasi browser.
