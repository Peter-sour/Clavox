const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const knex = require("../db/knext");
const { generateOTP } = require("../utils/otp");

// Kirim OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email diperlukan" });

  const otp = generateOTP();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // 5 menit

  await knex("otps").insert({ email, otp, expires_at: expiresAt });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Kode OTP Login",
    text: `Kode OTP Anda adalah: ${otp}`,
  });

  res.json({ message: "OTP terkirim" });
});

// Verifikasi OTP
router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  if (!email || !otp) return res.status(400).json({ message: "Data kurang" });

  const record = await knex("otps")
    .where({ email })
    .orderBy("id", "desc")
    .first();

  if (!record) return res.status(400).json({ message: "OTP tidak ditemukan" });
  if (record.otp !== otp) return res.status(400).json({ message: "OTP salah" });
  if (new Date(record.expires_at) < new Date()) {
    return res.status(400).json({ message: "OTP kadaluarsa" });
  }

  res.json({ message: "OTP valid, login berhasil" });
});

module.exports = router;
