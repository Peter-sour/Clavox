import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';

const OTPVerificationScreen = ({ verificationTarget }) => {
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(60);

  // Efek untuk timer hitung mundur
  useEffect(() => {
    if (timer === 0) return;

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleResendCode = () => {
    // Logika untuk mengirim ulang kode
    alert(`Mengirim ulang kode ke ${verificationTarget}`);
    setTimer(60); // Reset timer
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#1C1A1A] text-white p-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-2 text-gray-100">
          Masukkan Kode Verifikasi
        </h1>
        <p className="text-gray-400 mb-8">
          Kami telah mengirimkan kode 6 digit ke <br />
          <span className="font-bold text-gray-200">{verificationTarget}</span>
        </p>

        {/* Komponen Input OTP */}
        <div className="my-10">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span className="mx-2"></span>}
            renderInput={(props) => <input {...props} />}
            containerStyle="flex justify-center"
            inputStyle="otp-input-box"
          />
        </div>

        {/* Tombol Verifikasi */}
        <button
          // Tombol disable jika OTP belum lengkap
          disabled={otp.length < 6}
          className="w-full py-3 bg-blue-600 rounded-lg font-semibold transition-colors duration-200 disabled:bg-gray-600 disabled:cursor-not-allowed hover:bg-blue-700"
        >
          Verifikasi
        </button>

        {/* Opsi Kirim Ulang Kode */}
        <div className="text-sm text-gray-500 mt-6">
          {timer > 0 ? (
            <span>Kirim ulang kode dalam {timer} detik</span>
          ) : (
            <button onClick={handleResendCode} className="text-blue-400 hover:text-blue-300">
              Kirim ulang kode
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationScreen;