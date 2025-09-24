import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

// DIUBAH: Menambahkan prop onSubmitOtp untuk menangani verifikasi
const OTPVerification = ({ verificationTarget, onGoBack, onSubmitOtp }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (timer > 0) {
      const intervalId = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);

  const handleResendCode = () => {
    alert(`Mengirim ulang kode ke ${verificationTarget}`);
    setTimer(60);
    // TODO: Tambahkan logika untuk memanggil API resend-otp di sini
  };

  // BARU: Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      onSubmitOtp(otp); // Memanggil fungsi dari parent component
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1C1A1A] text-white p-4 sm:p-6">
      <div className="w-full max-w-sm text-center flex flex-col items-center">
        <MailIcon />
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-100">
          Masukkan Kode Verifikasi
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
          {/* DIUBAH: Menjadi 6 digit */}
          Kami telah mengirimkan kode 6 digit ke <br />
          <span className="font-bold text-gray-200">{verificationTarget}</span>
        </p>

        {/* BARU: Form untuk menangani submit */}
        <form onSubmit={handleSubmit} className="w-full">
          <div className="my-8 w-full">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="w-2 sm:w-4"></span>}
              renderInput={(props) => <input {...props} />}
              containerStyle="flex justify-center"
              inputStyle="otp-input-box"
            />
          </div>

          <button
            type="submit" // BARU: Tombol submit
            // DIUBAH: Kondisi disabled menjadi 6
            disabled={otp.length < 6}
            className="w-full py-3 px-12 bg-blue-600 rounded-lg font-semibold transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700"
          >
            Verifikasi
          </button>
        </form>

        <div className="text-sm text-gray-500 mt-6">
          {timer > 0 ? (
            <span>Kirim ulang kode dalam {timer} detik</span>
          ) : (
            <span>
              Belum menerima kode?{' '}
              <button onClick={handleResendCode} className="font-semibold text-blue-400 hover:text-blue-300">
                Kirim ulang
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;