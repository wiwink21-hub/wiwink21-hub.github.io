# TECHCO - Electronics Company Website

Website e-commerce untuk perusahaan elektronik dengan berbagai kategori produk dan layanan pelanggan.

## Fitur

- **Navigasi Lengkap**
  - Home
  - About
  - Contact
  - Products (dengan dropdown)
    - All Products
    - TVs & Audio
    - Home Appliances
    - Computing
  - Support (dengan dropdown)
    - Support Center
    - Customer Service
    - Product Registration
    - Warranty Info

- **Halaman Produk**
  - TVs & Audio - Televisi dan sistem audio premium
  - Home Appliances - Peralatan rumah tangga pintar
  - Computing - Monitor dan solusi komputasi

- **Halaman Layanan**
  - Customer Service - Dukungan pelanggan 24/7
  - Product Registration - Pendaftaran produk untuk aktivasi garansi
  - Warranty Info - Informasi garansi lengkap

## Teknologi

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Server akan berjalan di `http://localhost:5000`

## Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy ke GitHub Pages

### Langkah 1: Setup Repository
1. Push kode ini ke repository GitHub Anda
2. Pastikan branch utama adalah `main` atau `master`

### Langkah 2: Aktifkan GitHub Pages
1. Buka repository di GitHub
2. Masuk ke **Settings** → **Pages**
3. Di bagian **Source**, pilih **GitHub Actions**
4. Klik **Save**

### Langkah 3: Deploy Otomatis
Workflow GitHub Actions sudah dikonfigurasi di `.github/workflows/deploy.yml`

Setiap kali Anda push ke branch `main` atau `master`, website akan otomatis di-build dan di-deploy ke GitHub Pages.

### Konfigurasi Vite untuk GitHub Pages

Konfigurasi di `vite.config.ts` sudah diatur untuk GitHub Pages:

```typescript
export default defineConfig({
  base: '/',  // Untuk user/org pages (username.github.io)
  // ...
})
```

**Catatan:**
- Jika repository Anda adalah `username.github.io`, gunakan `base: '/'`
- Jika repository Anda adalah project page (contoh: `my-project`), ubah menjadi `base: '/my-project/'`

### URL Deployment
Setelah deploy berhasil, website Anda akan tersedia di:
- User/Org pages: `https://username.github.io`
- Project pages: `https://username.github.io/repository-name`

## Struktur Folder

```
src/
├── assets/          # Gambar produk
├── components/      # Komponen React
│   ├── ui/         # Komponen shadcn/ui
│   ├── Navigation.tsx
│   └── Footer.tsx
├── pages/          # Halaman aplikasi
│   ├── Index.tsx
│   ├── Products.tsx
│   ├── TvsAudio.tsx
│   ├── HomeAppliances.tsx
│   ├── Computing.tsx
│   ├── Support.tsx
│   ├── CustomerService.tsx
│   ├── ProductRegistration.tsx
│   ├── Warranty.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── lib/            # Utilitas
└── App.tsx         # Root component dengan routing
```

## License

MIT
