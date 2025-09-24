// 1. IMPORT SEMUA PACKAGE YANG DIBUTUHKAN
require('dotenv').config(); // Untuk memuat variabel dari file .env
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // Untuk hashing password
const db = require('./db/db'); // Koneksi Knex dari file db.js
const nodemailer = require('nodemailer'); // Untuk mengirim email

// 2. INISIALISASI APLIKASI EXPRESS
const app = express();
app.use(cors()); 
app.use(express.json()); // Middleware agar Express bisa membaca body JSON dari request
app.use(express.urlencoded({ extended: true }));

// 3. KONFIGURASI NODEMAILER (PENGIRIM EMAIL)
// Pastikan kredensial ini ada di file .env kamu
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,      
  secure: false,  // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // App Password Gmail
  },
});

// 4. DEFINISI ENDPOINT API

// ## Endpoint untuk Registrasi User Baru & Kirim OTP ##
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Validasi input sederhana
  if (!email || !password) {
    return res.status(400).json({ message: 'Email dan password tidak boleh kosong.' });
  }

  try {
    // Hash password sebelum disimpan ke database untuk keamanan
    const hashedPassword = await bcrypt.hash(password, 10); // 10 adalah salt rounds

    // Gunakan transaksi untuk memastikan semua proses berjalan atau tidak sama sekali
    await db.transaction(async (trx) => {
      // Langkah 1: Simpan user baru ke tabel 'users'
      await trx('users').insert({ username ,email, password: hashedPassword });

      // Langkah 2: Buat kode OTP
      const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Kedaluwarsa dalam 10 menit

      // Langkah 3: Simpan OTP ke tabel 'otps'
      // Hapus OTP lama (jika ada) untuk email ini sebelum memasukkan yang baru
      await trx('otps').where({ username,email }).del();
      await trx('otps').insert({ username, email, otp_code: otpCode, expires_at: expiresAt });

      // Langkah 4: Kirim email berisi OTP menggunakan Nodemailer
      // LANGKAH 4: Kirim email berisi OTP (tapi tangani error supaya registrasi tetap jalan)
        try {
        await transporter.sendMail({
            from: `"Clavox" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Kode Verifikasi Akun',
            html: `
           <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; text-align: center; background-color: #f9f9f9; padding: 40px;">
                <div style="max-width: 500px; margin: auto; background: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <h2 style="color: #333333;">Verifikasi Akun Anda</h2>
                    <p style="color: #555555; font-size: 16px; line-height: 1.5;">
                    Gunakan kode OTP berikut untuk menyelesaikan pendaftaran.<br>
                    <strong>Jangan berikan kode ini kepada siapa pun.</strong>
                    </p>
                    <h1 style="background: #eef2ff; color: #4a4a4a; padding: 20px; border-radius: 10px; font-size: 36px; letter-spacing: 4px; margin: 25px 0;">
                    ${otpCode}
                    </h1>
                    <p style="color: #888888; font-size: 14px;">
                    Kode ini hanya berlaku selama <strong>10 menit</strong>.
                    </p>
                    <p style="margin-top: 20px; font-size: 14px; color: #aaaaaa;">
                    &copy; 2025 Clavox. Semua hak cipta dilindungi.
                    </p>
                </div>
            </div>
            `,
        });
        } catch (err) {
        console.error('Gagal kirim email, tapi registrasi tetap berhasil:', err.message);
        console.log(`OTP untuk ${email}: ${otpCode}`); // log OTP ke console supaya developer bisa lihat
        }
    });

    // Jika semua proses dalam transaksi berhasil
    res.status(201).json({ message: 'Registrasi berhasil! Silakan cek email Anda untuk kode OTP.' });
  } catch (error) {
    // Tangani jika email sudah terdaftar (error kode unik)
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'Email ini sudah terdaftar.' });
    }
    // Tangani error lainnya
    console.error('Error saat registrasi:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
});

// ## Endpoint untuk Verifikasi Kode OTP ##
app.post('/api/verify-otp', async (req, res) => {
  const { email, otpCode } = req.body;

  if (!email || !otpCode) {
    return res.status(400).json({ message: 'Email dan kode OTP tidak boleh kosong.' });
  }

  try {
    // Cari OTP di database yang cocok dengan email, kode, dan belum kedaluwarsa
    const otpRecord = await db('otps')
      .where({ email, otp_code: otpCode })
      .andWhere('expires_at', '>', new Date()) // Cek apakah belum kedaluwarsa
      .first();

    // Jika OTP tidak ditemukan atau tidak valid
    if (!otpRecord) {
      return res.status(400).json({ message: 'OTP tidak valid atau sudah kedaluwarsa.' });
    }

    // Jika OTP valid, update status user dan hapus OTP
    await db.transaction(async (trx) => {
      // Update kolom is_verified di tabel 'users' menjadi true
      await trx('users').where({ email }).update({ is_verified: true });

      // Hapus semua OTP yang terkait dengan email ini agar tidak bisa dipakai lagi
      await trx('otps').where({ email }).del();
    });

    res.status(200).json({ message: 'Akun berhasil diverifikasi! Anda sekarang bisa login.' });
  } catch (error) {
    console.error('Error saat verifikasi OTP:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
  }
});

// 5. JALANKAN SERVER
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});