import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import PhoneInput from 'react-phone-number-input';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loginMethod, setLoginMethod] = useState('phone');

  const handleContinue = () => {
    if (loginMethod === 'phone') {
      if (phoneNumber && phoneNumber.length > 9) {
        alert(`Mengirim kode verifikasi ke: ${phoneNumber}`);
      } else {
        alert('Nomor telepon tidak valid.');
      }
    } else {
      if (email.includes('@') && email.includes('.')) {
        alert(`Mengirim link verifikasi ke: ${email}`);
      } else {
        alert('Alamat email tidak valid.');
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1C1A1A] text-white p-6">
      <div className="w-full max-w-sm text-center">
        <img
          src={Logo}
          alt="Clavox Logo"
          className="w-24 h-24 mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold mb-2 text-gray-100">
          Selamat Datang di Clavox
        </h1>
        <p className="text-gray-400 mb-8">
          {loginMethod === 'phone'
            ? 'Masukkan nomor telepon Anda untuk memulai.'
            : 'Masukkan alamat email Anda untuk melanjutkan.'}
        </p>

        <div className="space-y-4">
          {loginMethod === 'phone' ? (
            <PhoneInput
              placeholder="Masukkan nomor telepon"
              value={phoneNumber}
              onChange={setPhoneNumber}
              defaultCountry="ID"
              className="phone-input"
            />
          ) : (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nama@email.com"
              className="w-full px-4 py-3 bg-[#2D2A2A] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}

          <button
            onClick={handleContinue}
            className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200"
          >
            Lanjutkan
          </button>
        </div>

        <button
          onClick={() => setLoginMethod(loginMethod === 'phone' ? 'email' : 'phone')}
          className="text-sm text-blue-400 hover:text-blue-300 mt-6"
        >
          {loginMethod === 'phone'
            ? 'Atau lanjutkan dengan email'
            : 'Atau lanjutkan dengan nomor telepon'}
        </button>
        <p className="text-xs text-gray-500 mt-8">
          Dengan melanjutkan, Anda menyetujui{' '}
          <a href="#" className="underline">Ketentuan Layanan</a> kami.
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;