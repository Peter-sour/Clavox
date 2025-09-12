import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';

// ==> LETAKKAN KODE IKON DI SINI <==
const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-16 w-16 text-gray-500 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const OTPVerification = ({ verificationTarget, onGoBack }) => {
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
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1C1A1A] text-white p-4 sm:p-6">
      <div className="w-full max-w-sm text-center flex flex-col items-center">

        {/* ==> PANGGIL IKON DI SINI <== */}
        <MailIcon />

        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-100">
          Masukkan Kode Verifikasi
        </h1>
        <p className="text-sm sm:text-base text-gray-400 mb-8 leading-relaxed">
          Kami telah mengirimkan kode 5 digit ke <br />
          <span className="font-bold text-gray-200">{verificationTarget}</span>
        </p>

        <div className="my-8 w-full">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={5}
            renderSeparator={<span className="w-2 sm:w-4"></span>}
            renderInput={(props) => <input {...props} />}
            containerStyle="flex justify-center"
            inputStyle="otp-input-box"
          />
        </div>

        <button
          disabled={otp.length < 5}
          className="py-3 px-12 bg-blue-600 rounded-lg font-semibold transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Verifikasi
        </button>

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

        <div className="mt-4">
            <button onClick={onGoBack} className="text-sm text-gray-400 hover:text-gray-200">
                ‹ Kembali untuk mengubah
            </button>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;