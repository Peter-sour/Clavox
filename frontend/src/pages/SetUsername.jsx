import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import Logo from "../assets/Logo.png"; // pastikan path sesuai
import FloatingLabelInput from "../components/common/FloatingLabelInput"; // sama seperti di register
import { API_URL } from "../api";

const SetUsername = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  // Ambil google_id dari query
  const query = new URLSearchParams(useLocation().search);
  const google_id = query.get("google_id");

  useEffect(() => {
    if (!google_id) {
      setMessage("Parameter google_id tidak ditemukan!");
    }
  }, [google_id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setMessage("Username tidak boleh kosong!");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${API_URL}/auth/set-username`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ google_id, username }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Username berhasil disimpan!");
        setTimeout(() => history.push("/login"), 1000);
      } else {
        setMessage(data.message || "❌ Gagal menyimpan username.");
      }
    } catch (err) {
      setMessage("⚠️ Terjadi kesalahan koneksi ke server.");
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
          Lengkapi Username
        </h1>

        <p className="text-gray-400 text-center mb-6 text-sm">
          Masukkan username unik untuk akun Google Anda.
        </p>

        {/* Error / Info Message */}
        <div className="text-center mb-4 min-h-[20px]">
          {message && <p className="text-gray-400 text-sm">{message}</p>}
        </div>

        {/* Form Input */}
        <form onSubmit={handleSubmit} className="pb-24 md:pb-0">
          <div className="flex flex-col gap-y-5">
            <FloatingLabelInput
              name="username"
              type="text"
              label="Nama pengguna"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Tombol Submit */}
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
              {isLoading ? "Menyimpan..." : "Lanjutkan"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetUsername;
