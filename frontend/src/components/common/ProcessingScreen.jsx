import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../assets/Logo.png'; // Sesuaikan path logo Anda

const ProcessingScreen = (props) => {
  const history = useHistory();
  // Ambil username dari state yang dikirim oleh RegisterScreen
  const username = props.location.state?.username || 'Pengguna Baru';

  // useEffect akan berjalan sekali saat komponen ditampilkan
  useEffect(() => {
    // Set timer untuk redirect setelah 2.5 detik
    const timer = setTimeout(() => {
      // Arahkan ke halaman sukses, sambil tetap membawa username
      history.replace('/success', { username: username });
    }, 2500); // 2.5 detik

    // Cleanup function untuk membersihkan timer jika komponen di-unmount
    return () => clearTimeout(timer);
  }, [history, username]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C1A1A] text-center">

      {/* Container untuk Logo dan Animasi Lingkaran */}
      <div className="relative flex items-center justify-center w-40 h-40">

        {/* Lingkaran yang Beranimasi (Pulse) */}
        <div className="absolute w-full h-full rounded-full bg-gray-600 animate-ping opacity-75"></div>

        {/* Lingkaran Statis di Dalam */}
        <div className="relative w-32 h-32 rounded-full bg-[#333] flex items-center justify-center border-2 border-gray-600">
          {/* Logo */}
          <img src={Logo} alt="Clevox Logo" className="w-20 h-20 object-contain" />
        </div>

      </div>

      {/* Teks di Bawah Logo */}
      <p className="text-gray-400 mt-8 text-lg animate-pulse">
        Tunggu sebentar...
      </p>

    </div>
  );
};

export default ProcessingScreen;