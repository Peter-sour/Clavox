import React, { useState } from 'react';
import Logo from '../../assets/Logo.png';
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const history = useHistory();

  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert('Fungsi Google OAuth akan diimplementasikan di backend');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsGoogleLoading(false);
    }
  };

  const handleManualLogin = () => {
    setIsLoading(true); // aktifkan loading

    // simulasi proses login / register
    setTimeout(() => {
      setIsLoading(false);
      history.push("/register"); // pindah halaman setelah selesai
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col p-4" style={{backgroundColor: '#1C1A1A'}}>
      {/* Logo */}
      <div className="flex justify-center mb-28 ">
        <div className="flex items-center gap-x-2 -translate-y-18 md:-translate-y-8">
          <div className="w-[50px] h-[50px] sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20">
            <img
              src={Logo}
              alt="Clavox Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span style={{color: '#D9D9D9'}} className="text-2xl font-medium   ">Clavox</span>
        </div>
      </div>
      <div className="w-full max-w-sm mt-20">
        {/* Main Text */}
        <div className="mb-16 px-4">
          <h1 style={{color: '#FFFFFF', fontSize: '24px', lineHeight: '1.2'}} className="font-bold">
            Update, berbagi, dan<br/>
            terhubung tanpa henti.<br/>
            Semua dalam satu<br/>
            tempat
          </h1>
        </div>

        {/* Google Login Button */}
        <div className="mb-3 px-2">
          <button
            onClick={handleGoogleLogin}
            disabled={isGoogleLoading}
            className="w-full font-medium py-4 px-4 rounded-lg flex items-center justify-center"
            style={{backgroundColor: '#D9D9D9', color: '#000000'}}
          >
            {isGoogleLoading ? (
              <div className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </div>
            ) : (
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Masuk dengan Google
              </div>
            )}
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center mb-3">
          <div className="flex-1" style={{borderTop: '1px solid #555'}}></div>
          <span style={{color: '#D9D9D9'}} className="px-4 text-sm">Atau</span>
          <div className="flex-1" style={{borderTop: '1px solid #555'}}></div>
        </div>

        {/* Manual Login Button */}
        <div className="mb-8 px-2">
          <button
            onClick={handleManualLogin}
            disabled={isLoading} // tombol dikunci saat loading
            className={`w-full font-medium py-4 px-4 rounded-lg flex justify-center items-center ${
              isLoading ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
            style={{ backgroundColor: "#555", color: "#D9D9D9" }}
          >
            {isLoading ? (
              <div className="w-6 h-6 border-4 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
            ) : (
              "Buat akun"
            )}
          </button>
        </div>


        {/* Footer Text */}
        <div className="text-center">
          <p style={{color: '#D9D9D9'}} className="text-xs leading-relaxed mb-4">
            Dengan mendaftar, Anda menyetujui <a href="#" className="text-blue-400">Syarat dan Ketentuan</a> serta <a href="#" className="text-blue-400">Kebijakan Privasi</a> kami.
          </p>
          <p style={{color: '#999'}} className="text-xs">
            Sudah punya akun? <a href="#" className="text-blue-400">Masuk</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default LoginScreen;