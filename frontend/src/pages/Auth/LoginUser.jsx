import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import FloatingLabelInput from "../../components/common/FloatingLabelInput";
import { UserContext } from "../../components/common/AppContext";
import { API_URL } from "../../api";

const LoginUser = () => {
  const history = useHistory();
  const { setUserData } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Gagal login. Periksa username/password.");
      }

      // Simpan data user ke context
      setUserData({ username: data.username, email: data.email });
      history.push("/dashboard"); // arahkan ke dashboard

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1C1A1A] p-5">
      <div className="w-full max-w-sm">
        {/* Header Logo */}
        <div className="flex flex-col items-center gap-y-2 mb-8 -translate-y-12">
          <div className="w-16 h-16">
            <img
              src={Logo}
              alt="Clavox Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[#D9D9D9] text-2xl font-medium">Clavox</span>
        </div>

        <h1 className="text-white text-3xl font-bold text-center mb-6">
          Masuk ke Akun
        </h1>

        {/* Pesan error */}
        <div className="text-center mb-4 min-h-[20px]">
          {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>

        {/* Form login */}
        <form onSubmit={handleSubmit} className="pb-24 md:pb-0">
          <div className="flex flex-col gap-y-5">
            <FloatingLabelInput
              name="username"
              type="text"
              label="Nama pengguna"
              value={formData.username}
              onChange={handleChange}
            />
            <FloatingLabelInput
              name="password"
              type="password"
              label="Kata sandi"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {/* Tombol bawah */}
          <div
            className="
              fixed bottom-0 left-0 w-full p-4 bg-[#1C1A1A] border-t border-gray-800 flex justify-end
              md:relative md:w-auto md:bg-transparent md:border-none md:p-0 md:mt-8
            "
          >
            <button
              type="submit"
              disabled={isLoading}
              className="bg-[#D9D9D9] text-black font-bold py-3 px-12 rounded-full transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Memproses..." : "Masuk"}
            </button>
          </div>
        </form>

        {/* Tautan ke Register */}
        <p className="text-gray-400 text-sm text-center mt-6">
          Belum punya akun?{" "}
          <span
            onClick={() => history.push("/login")}
            className="text-[#D9D9D9] font-medium hover:underline cursor-pointer"
          >
            Daftar sekarang
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginUser;
