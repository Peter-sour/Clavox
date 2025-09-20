import React, { useState } from 'react';
// ✨ 1. Impor ikon mata dari react-icons
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const FloatingLabelInput = ({ name, type, label, value, onChange }) => {
  // ✨ 2. State untuk mengatur visibilitas password
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Fungsi untuk mengubah state visibilitas
  const toggleVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // ✨ 3. Tipe input akan berubah (text/password) tergantung state
  const inputType = isPasswordVisible ? 'text' : type;

  return (
    <div className="relative">
      <input
        name={name}
        type={inputType} // Gunakan tipe input yang dinamis
        placeholder=" "
        value={value}
        onChange={onChange}
        className="
          block w-full px-3 py-3 bg-transparent
          rounded-lg border-2 border-gray-500
          appearance-none focus:outline-none focus:ring-0
          focus:border-gray-300 peer text-white
        "
        required
      />
      <label
        htmlFor={name}
        className="
          absolute text-sm text-gray-400 duration-300 transform
          -translate-y-4 scale-75 top-2 z-10 origin-[0]
          bg-[#1C1A1A] px-2
          peer-focus:px-2 peer-focus:text-gray-300
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:-translate-y-1/2
          peer-placeholder-shown:top-1/2
          peer-focus:top-2 peer-focus:scale-75
          peer-focus:-translate-y-4
          left-1
        "
      >
        {label}
      </label>

      {/* ✨ 4. Logika untuk menampilkan ikon mata */}
      {type === 'password' && (
        <button
          type="button" // Penting agar tidak men-submit form
          onClick={toggleVisibility}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 hover:text-white cursor-pointer"
        >
          {isPasswordVisible ? (
            <AiOutlineEyeInvisible size={22} />
          ) : (
            <AiOutlineEye size={22} />
          )}
        </button>
      )}
    </div>
  );
};

export default FloatingLabelInput;