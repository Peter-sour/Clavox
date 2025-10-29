import React, { useState, useEffect,useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import OTPVerification from '../pages/Auth/OtpVerification'; // Ini adalah komponen UI OTP Anda
import { UserContext } from '../components/common/AppContext';

const OTPPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { userData } = useContext(UserContext);
  
  const location = useLocation();
  const history = useHistory();
  const email = userData.email;

  useEffect(() => {
    if (!email) {
      history.push('/register');
    }
  }, [email, history]);

  const handleVerifyOtp = async (otp) => {
    setError(null);
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otpCode: otp })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Kode OTP tidak valid.');
      }
      alert('Verifikasi berhasil! Akun Anda sudah aktif.');
      history.push('/verify');
    } catch (err) {
      setError(err.message);
      // Menampilkan error di UI akan lebih baik dari alert
      alert(err.message || 'Kode OTP salah atau kedaluwarsa.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    history.push('/register');
  };

  // Komponen ini akan merender UI OTP Anda dan memberinya "kecerdasan"
  return (
    <OTPVerification 
      verificationTarget={email}
      onSubmitOtp={handleVerifyOtp}
    />
  );
};

export default OTPPage;