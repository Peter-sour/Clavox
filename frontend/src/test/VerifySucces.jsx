import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

export default function VerifySuccess() {
  useEffect(() => {
    // confetti efek
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4ade80', '#22d3ee', '#facc15', '#f472b6']
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1C1A1A' }}>
      <div className="text-center animate-pop">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-400 mb-4 glow">
          ✅ Verifikasi Berhasil
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          Akun Anda sudah aktif. Selamat bergabung!
        </p>
      </div>
    </div>
  );
}