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
