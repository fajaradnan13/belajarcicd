# 📘 Buku Panduan CI/CD GitHub Actions

Buku panduan ini berisi catatan langkah demi langkah dari semua yang sudah kita pelajari dan lakukan. Anda dapat menggunakan panduan ini jika ingin mengulangi proses CI/CD dari nol di project lain.

---

## 🛠️ Tahap 1: Persiapan Awal (Setup Project Lokal)

Setiap project CI/CD tentu membutuhkan *source code*. Pada lab ini, kita menggunakan Python dengan library **MkDocs** (untuk membuat website statis).

**Langkah-langkah yang dilakukan:**
1. Inisialisasi Git: 
   ```bash
   git init
   git branch -M main
   ```
2. Membuat file dependencies Python (`requirements.txt`):
   ```text
   mkdocs==1.5.3
   ```
3. Membuat file konfigurasi MkDocs (`mkdocs.yml`):
   ```yaml
   site_name: CI/CD Lab
   site_description: Project untuk belajar CI/CD dengan GitHub Actions
   theme:
     name: readthedocs
   nav:
     - Home: index.md
     - About: about.md
   ```
4. Membuat folder `docs/` beserta isinya (`index.md` dan `about.md`).
5. Menyimpan (commit) semuanya:
   ```bash
   git add .
   git commit -m "Initial commit"
   ```

---

## 🤖 Tahap 2: Menghubungkan ke GitHub

Untuk menggunakan GitHub Actions, kode kita harus berada di GitHub.
1. Buat repository kosong di akun GitHub Anda (tanpa Readme/.gitignore).
2. Salin URL repository tersebut.
3. Hubungkan lokal ke GitHub dan *push* (unggah):
   ```bash
   git remote add origin https://github.com/<username>/<nama-repo>.git
   git push -u origin main
   ```

---

## 🚀 Modul 1: Workflow "Hello World" Pertama

Di GitHub Actions, otomatisasi disebut dengan **Workflow**. Workflow ditulis dalam bahasa **YAML** dan wajib diletakkan di dalam folder `.github/workflows/`.

**Contoh Struktur File:** `.github/workflows/hello-world.yml`

```yaml
name: Hello World Workflow

# "on:" mendefinisikan TRIGGERS (kapan ini dijalankan?)
on:
  push:
    branches:
      - main
  workflow_dispatch: # Mengizinkan eksekusi manual via tombol di GitHub

# "jobs:" mendefinisikan TUGAS (apa yang harus dilakukan?)
jobs:
  say_hello:
    runs-on: ubuntu-latest # Menentukan OS server virtual
    
    # "steps:" adalah urutan eksekusi script
    steps:
      # Action bawaan untuk mendownload kode ke server virtual
      - name: Checkout Repository
        uses: actions/checkout@v4
        
      # Menjalankan perintah terminal biasa
      - name: Tampilkan pesan sapaan
        run: echo "Halo, selamat datang di CI/CD Lab!"
        
      - name: Cek versi Python yang terinstal default
        run: python --version
```

*(Panduan ini akan terus diperbarui seiring berjalannya lab kita!)*

---

## 🚦 Modul 2: Mengontrol Trigger Workflow

Kita bisa membatasi kapan workflow berjalan menggunakan opsi tambahan di bawah `on:`.

Contoh jika kita hanya ingin trigger terpicu saat ada perubahan di folder `docs/`:
```yaml
on:
  push:
    branches:
      - main
    paths:
      - 'docs/**' # Filter spesifik ke dalam folder docs
```
Jika kita mengedit file di luar folder `docs` (misalnya file `README.md` di luar), workflow tidak akan dijalankan. Ini sangat menghemat _resource_ CI/CD.

---

## 🏗️ Modul 4 & 6: Real CI/CD (Membuat & Menerbitkan Web)

Tahap sesungguhnya dari CI/CD:
1. **CI (Continuous Integration):** Menjalankan pengujian (build) otomatis.
2. **CD (Continuous Deployment):** Jika pengujian sukses, hasilnya otomatis dideploy/dipublikasikan ke server (dalam hal ini GitHub Pages).

**Contoh File:** `.github/workflows/ci-cd.yml`

```yaml
name: CI/CD Web Dokumentasi

on:
  push:
    branches:
      - main
    paths:
      - 'docs/**'
      - 'mkdocs.yml'

# Izin wajib agar aksi ini bisa membuat branch baru untuk deployment
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        
      # Tahap CI
      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.x'
          
      - name: Install Dependencies
        run: pip install -r requirements.txt
        
      - name: Test Build (CI)
        run: mkdocs build --strict
        
      # Tahap CD
      - name: Deploy ke GitHub Pages (CD)
        run: mkdocs gh-deploy --force
```

### Mengaktifkan GitHub Pages (Satu Kali Setup)
Setelah *workflow* CD berhasil berjalan, GitHub otomatis membuat branch baru bernama `gh-pages` secara rahasia. Agar bisa diakses menjadi website:
1. Pergi ke **Settings** repository.
2. Pilih menu **Pages** di sebelah kiri.
3. Di bagian "Build and deployment", pastikan Source diatur ke **Deploy from a branch**.
4. Pilih branch **`gh-pages`** lalu klik **Save**.
5. Website Anda akan aktif dalam 1-2 menit di URL: `https://<username>.github.io/<nama-repo>/`

*(Panduan ini akan terus diperbarui seiring berjalannya lab kita!)*
