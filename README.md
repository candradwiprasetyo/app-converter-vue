# app-converter-vue

Dibuat menggunakan **Vue 3** dan **Vite** sebagai build tool, aplikasi ini dapat mengkonversi berbagai satuan berat (seperti kilogram ke gram) dan suhu (seperti celcius ke fahrenheit) dengan mudah.

## Fitur

- **Konversi Berat**: Mengkonversi satuan berat seperti kilogram ke gram, pon, dan lainnya.
- **Konversi Suhu**: Mengkonversi satuan suhu seperti celcius ke fahrenheit, kelvin, dan lainnya.
- **Vue 3**: Menggunakan Vue 3 sebagai framework javascript untuk membangun UI.
- **Vite**: Build tool cepat yang dioptimalkan untuk Vue 3.
- **TypeScript**: Penggunaan typescript untuk meningkatkan keamanan tipe data dalam pengembangan.
- **Tailwind CSS**: Kerangka kerja CSS untuk membuat desain yang responsif dan modern.

## Struktur Folder

```
app-converter-vue/
├── public/                     # File statis yang dapat diakses melalui url root
├── src/                        # Kode sumber aplikasi
│   ├── assets/                 # Aset statis seperti gambar atau font
│   ├── components/             # Komponen vue (ex: Input.vue, Select.vue)
│   ├── constants/              # Menyimpan nilai konfigurasi dan konstan yang digunakan di seluruh aplikasi (ex: satuan konversi berat dan suhu)
│   ├── pages/                  # Halaman-halaman aplikasi (ex, home)
│   ├── router/                 # Konfigurasi vue router
│   ├── utils/                  # Fungsi utilitas yang digunakan di aplikasi (ex: konversi nilai berat atau suhu)
│   ├── App.vue                 # Komponen vue utama sebagai root
│   └── main.ts                 # Entrypoint untuk aplikasi
├── tsconfig.json               # Konfigurasi typescript untuk seluruh proyek
├── vite.config.ts              # File konfigurasi vite
├── package.json                # Dependensi dan skrip proyek
└── README.md                   # Dokumentasi proyek
```
