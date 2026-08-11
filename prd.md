PRD — Frontend Coffee Shop Company Profile
1. Ringkasan Proyek (Overview)
1.1 Latar Belakang
Kedai kopi membutuhkan kehadiran digital untuk membangun kesadaran merek (brand awareness) dan memberikan informasi dasar kepada calon pelanggan. Pada fase awal ini, fokus utama adalah menciptakan etalase digital yang menarik secara visual tanpa sistem transaksional yang kompleks.

1.2 Tujuan
Membangun website Single Page Application (SPA) yang responsif dan estetis.

Menyajikan informasi krusial: cerita brand, daftar menu, suasana kedai (galeri), dan lokasi.

Mencapai performa pemuatan halaman yang cepat dengan menggunakan teknologi frontend modern.

1.3 Target Pengguna
Calon pelanggan yang mencari informasi menu dan harga.

Pengguna internet yang mencari tempat nongkrong atau bekerja (Work From Cafe).

Komunitas pencinta kopi.

2. Kebutuhan Antarmuka & Halaman (Core Features)
Sistem akan dibangun dalam bentuk satu halaman panjang yang mulus (smooth scrolling SPA) atau menggunakan perutean (routing) ringan.

2.1 Beranda (Hero Section)
Visual Utama: Gambar latar belakang berkualitas tinggi (suasana kedai atau sajian kopi).

Teks: Headline penyambutan dan tagline kedai.

Aksi (CTA): Tombol utama yang mengarah langsung ke bagian "Lihat Menu" atau "Kunjungi Kami".

2.2 Tentang Kami (About Us)
Kisah Brand: Paragraf teks statis yang menceritakan nilai jual unik (USP), asal mula, dan komitmen kualitas bahan (misal: biji kopi lokal).

Visual Pendukung: Foto tim atau kepala barista.

2.3 Daftar Menu (Menu List)
Kategorisasi: Pemisahan menu berbasis kategori (contoh: Signature, Espresso Based, Non-Coffee, Pastry).

Informasi Item: Nama produk, deskripsi singkat, dan harga.

Batasan: Hanya bersifat informatif (katalog). Tidak ada fitur keranjang belanja, kasir, atau perhitungan total harga.

2.4 Galeri (Gallery)
Tata Letak: Menggunakan sistem grid atau masonry yang responsif.

Konten: Kumpulan foto interior, eksterior, dan produk untuk memperlihatkan suasana (vibe) kedai.

2.5 Lokasi & Kontak (Location & Contact)
Integrasi Peta: Sematan (embed) Google Maps interaktif.

Informasi Operasional: Tabel atau daftar jam buka harian.

Tautan Sosial: Ikon yang dapat diklik menuju Instagram, TikTok, atau WhatsApp resmi.

3. Spesifikasi Teknis (Tech Stack)
3.1 Teknologi Inti
Framework: React.js (diinisiasi menggunakan Vite untuk build yang sangat cepat).

Styling: Tailwind CSS (untuk mendesain antarmuka secara cepat dan responsif).

Routing: React Router (jika diputuskan menggunakan multi-halaman) atau React Scroll (untuk navigasi satu halaman statis).

Ikon: Lucide React atau FontAwesome.

3.2 Pengelolaan Data (Fase Frontend)
Data Statis: Karena belum ada backend (Laravel), seluruh teks dan gambar akan dikodekan (hardcode) di dalam komponen.

Mock Data: Daftar menu dan daftar foto galeri akan disimpan dalam bentuk array JSON lokal di dalam proyek React untuk menyimulasikan database.

3.3 Hosting & Deployment
Version Control: Git dan GitHub (repositori proyek).

Deployment: Vercel (CI/CD otomatis terhubung dengan cabang utama (main branch) di GitHub).

4. Panduan Desain & UI/UX
Pendekatan: Mobile-First Design (dioptimalkan untuk layar ponsel karena mayoritas pengguna akan mengakses melalui gawai, kemudian diskalakan ke layar desktop).

Tema Warna: Akan ditentukan (contoh: Earth tones, minimalis monokrom, atau industrial gelap).

Tipografi: Kombinasi font sans-serif modern untuk keterbacaan tinggi dan font serif/display elegan untuk penekanan judul.

Animasi: Transisi halus (smooth hover states) pada tombol dan fade-in sederhana saat halaman digulir.

5. Ruang Lingkup Masa Depan (Out of Scope untuk Fase Ini)
Fitur-fitur berikut secara eksplisit dikecualikan dari fase frontend saat ini dan akan direncanakan untuk iterasi selanjutnya:

Integrasi Backend & REST API menggunakan Laravel.

Sistem Database dinamis (MySQL/PostgreSQL) untuk CMS (menambah/menghapus menu melalui dashboard).

Sistem Pemesanan (Order), Keranjang (Cart), dan Integrasi Gerbang Pembayaran (Payment Gateway).

Autentikasi Pengguna (Login/Register).