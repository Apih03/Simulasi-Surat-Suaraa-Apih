/*
  KONFIGURASI SIMULASI E-VOTING PILKADES CIATER
  Edit nilai di file ini untuk mengganti identitas, warna, foto, dan data calon.
  Gunakan path foto relatif, contoh: "assets/foto_calon_1.jpg"
*/
window.EVOTE_CONFIG = {
  electionTitle: "SURAT SUARA",
  electionName: "PEMILIHAN KEPALA DESA CIATER",
  village: "DESA CIATER",
  district: "KECAMATAN CIATER",
  regency: "KABUPATEN SUBANG",
  term: "2027–2035",
  logo: "assets/logo.jpeg",
  theme: {
    green: "#164734",
    greenDark: "#0c3023",
    gold: "#c9a44c",
    paper: "#fffdf6",
    ink: "#17251d",
    accent: "#1c6b48"
  },
  texts: {
    choose: "PILIH KANDIDAT INI",
    confirmQuestion: "APAKAH ANDA YAKIN AKAN MEMILIH CALON INI?",
    back: "ULANGI / KEMBALI",
    confirm: "YA, PILIH CALON INI",
    thankYou: "TERIMA KASIH, PILIHAN ANDA TELAH TERCATAT.",
    subtitle: "Silakan pilih satu calon kepala desa. Ini adalah simulasi sosialisasi dan pemilihan dapat diulang berkali-kali."
  },
  candidates: [
    { number: 1, name: "NAMA CALON 1", photo: "assets/foto_calon_1.jpg", description: "Calon Kepala Desa Ciater" },
    { number: 2, name: "NAMA CALON 2", photo: "assets/foto_calon_2.jpg", description: "Calon Kepala Desa Ciater" },
    { number: 3, name: "IWAN SETIAWAN", photo: "assets/foto_calon_3.jpg", description: "Calon Kepala Desa Ciater" },
    { number: 4, name: "NAMA CALON 4", photo: "assets/foto_calon_4.jpg", description: "Calon Kepala Desa Ciater" }
  ]
};
