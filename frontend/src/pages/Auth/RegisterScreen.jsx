import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'; // ✨ 1. Impor useHistory
import Logo from '../../assets/Logo.png'; // Sesuaikan path jika perlu
import FloatingLabelInput from '../../components/common/FloatingLabelInput'; // Sesuaikan path jika perlu

const RegisterScreen = () => {
  const history = useHistory(); // ✨ 2. Inisialisasi history

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError('Password dan konfirmasi password tidak cocok.');
      return;
    }
    setIsLoading(true);

    // Simulasi proses registrasi ke backend
    setTimeout(() => {
        setIsLoading(false);
        // ✨ 3. Arahkan ke halaman sukses dengan membawa state username
        history.push('/processing', { username: formData.username });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1A1A] p-5">
      <div className="w-full max-w-sm">
        <div className="flex flex-col items-center gap-y-2 mb-8 -translate-y-12">
          <div className="w-16 h-16"><img src={Logo} alt="Clevox Logo" className="w-full h-full object-contain"/></div>
          <span className="text-[#D9D9D9] text-2xl font-medium">Clavox</span>
        </div>
        <h1 className="text-white text-3xl font-bold text-center mb-6">Buat Akun Baru</h1>

        <div className="text-center mb-4 min-h-[20px]">
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>

        <form onSubmit={handleSubmit} className="pb-24 md:pb-0">
          <div className="flex flex-col gap-y-5">
            <FloatingLabelInput name="username" type="text" label="Nama pengguna" value={formData.username} onChange={handleChange} />
            <FloatingLabelInput name="email" type="email" label="Email" value={formData.email} onChange={handleChange} />
            <FloatingLabelInput name="password" type="password" label="Password" value={formData.password} onChange={handleChange} />
            <FloatingLabelInput name="confirmPassword" type="password" label="Konfirmasi password" value={formData.confirmPassword} onChange={handleChange} />
          </div>

          <div className="
            fixed bottom-0 left-0 w-full p-4 bg-[#1C1A1A] border-t border-gray-800 flex justify-end
            md:relative md:w-auto md:bg-transparent md:border-none md:p-0 md:mt-8
          ">
            <button type="submit" disabled={isLoading} className="bg-[#D9D9D9] text-black font-bold py-3 px-12 rounded-full transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed">
              {isLoading ? 'Memproses...' : 'Lanjutkan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;