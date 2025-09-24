import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './AppContext';

const SuccessScreen = (props) => {
  const history = useHistory();
  const { userData } = useContext(UserContext);

  const handleContinue = () => {
    history.push('/verify-otp');
  };

  const CheckmarkIcon = () => (
    // ✨ Ubah border-4 menjadi border-green-500 dan ukuran div
    <div className="w-40 h-40 rounded-full border-4 border-green-500 flex items-center justify-center">
      {/* ✨ Ubah ukuran SVG dan warna stroke menjadi green-500 */}
      <svg className="w-24 h-24 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1C1A1A] p-4 text-center">

      <div className="w-full max-w-sm flex flex-col items-center -translate-y-8 pb-24 md:pb-0">

        <div className="mb-8 font-bold  text-white">
          <CheckmarkIcon />
        </div>

        <h1 className="text-gray-300 text-2xl mb-4 leading-snug">
          Selamat, nama pengguna <span className="text-white font-semibold">{userData.username}</span> berhasil terdaftar di Clavox.
        </h1>

        <p className="text-gray-400 text-sm mb-10 px-2">
          Dengan nama ini, teman Anda akan lebih mudah menemukan Anda di Clavox. Mari lanjutkan untuk menyelesaikan pendaftaran akun.
        </p>

        <button
          onClick={handleContinue}
          className="bg-[#D9D9D9] text-black font-bold py-3 px-20 rounded-lg transition-all hover:bg-opacity-90 whitespace-nowrap"
        >
          Lanjutkan Pendaftaran
        </button>
      </div>

      {/* ✨ FOOTER DIPERBAIKI DENGAN <br /> */}
      <div className="
        fixed bottom-0 left-0 w-full p-4 text-xs text-gray-500 text-center leading-relaxed
        md:relative md:w-auto md:p-0 md:mt-auto md:pt-12
      ">
        Dengan menekan Lanjutkan Pendaftaran, Anda menyetujui
        <br />
        <a href="#" className="text-blue-400 hover:underline">Ketentuan Layanan</a>,{' '}
        <a href="#" className="text-blue-400 hover:underline">Kebijakan Privasi</a>,
        <br />
        dan <a href="#" className="text-blue-400 hover:underline">Kebijakan Cookie</a>.
      </div>
    </div>
  );
};

export default SuccessScreen;