# Clavox 💬

<div align="center">
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Ionic-7.0+-3880FF?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge" alt="License">
</div>

<br>

<p align="center">
  <strong>Aplikasi chat modern yang dapat berjalan di web, Android, dan iOS</strong>
</p>

<p align="center">
  Clavox adalah aplikasi chat yang dibangun dengan teknologi modern, terdiri dari frontend React dan backend Node.js, dengan kemampuan untuk deploy ke platform mobile menggunakan Ionic dan Capacitor.
</p>

## 🚀 Fitur

- ✅ **Registrasi & Login** dengan nomor telepon
- ✅ **Verifikasi OTP** yang aman
- ✅ **Chat Real-time** dengan Socket.IO (WIP 🚧)
- ✅ **UI Modern** dengan Tailwind CSS
- ✅ **Multi-platform** - Web, Android, iOS
- ✅ **Responsive Design** untuk semua ukuran layar

## 🛠️ Tech Stack

### Frontend
- **React** 18+ - Library UI modern
- **Vite** - Build tool yang cepat
- **Tailwind CSS** - Utility-first CSS framework
- **Ionic Framework** - UI components untuk mobile
- **Capacitor** - Cross-platform native runtime
- **React Router** - Client-side routing
- **React Phone Number Input** - Input nomor telepon
- **React OTP Input** - Input verifikasi OTP

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time communication (WIP)

## 📋 Prasyarat

Pastikan Anda telah menginstall:

- **Node.js** (v18.0 atau lebih baru)
- **npm** atau **yarn**
- **Android Studio** (untuk build Android)
- **Xcode** (untuk build iOS - hanya di macOS)

## 🚀 Quick Start

### 1. Clone Repository

```bash
git clone https://github.com/Peter-sour/Clavox.git
cd Clavox
```

### 2. Setup Backend

```bash
cd backend
npm install
npm run start
```

Server akan berjalan di `http://localhost:5000`

### 3. Setup Frontend

```bash
cd frontend
npm install

# Install Ionic CLI global (jika belum ada)
npm install -g @ionic/cli

# Install dependencies untuk mobile
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### 4. Jalankan Development Server

```bash
npm run dev
```

Aplikasi akan tersedia di `http://localhost:5173`

## 📱 Build untuk Mobile

### Android

```bash
# Build web assets
npm run build

# Add Android platform (hanya pertama kali)
npx cap add android

# Sync assets ke platform
npx cap sync

# Buka di Android Studio
npx cap open android
```

### iOS (macOS only)

```bash
# Install iOS dependencies
npm install @capacitor/ios

# Add iOS platform (hanya pertama kali)
npx cap add ios

# Sync assets ke platform
npx cap sync

# Buka di Xcode
npx cap open ios
```

## 📂 Struktur Project

```
Clavox/
├── 📁 backend/                 # Backend API (Node.js + Express)
│   ├── 📄 server.js           # Entry point server
│   ├── 📁 routes/             # API routes
│   ├── 📁 controllers/        # Business logic
│   ├── 📁 models/             # Data models
│   └── 📄 package.json
│
├── 📁 frontend/               # Frontend App (React + Ionic)
│   ├── 📁 android/            # Android project files
│   ├── 📁 src/
│   │   ├── 📁 assets/         # Static assets
│   │   ├── 📁 components/     # Reusable components
│   │   ├── 📁 screens/        # Application screens
│   │   ├── 📄 App.jsx         # Main App component
│   │   └── 📄 main.jsx        # Entry point
│   ├── 📄 capacitor.config.json
│   └── 📄 package.json
│
└── 📄 README.md               # Project documentation
```

## 🧪 Available Scripts

### Backend

| Script | Deskripsi |
|--------|-----------|
| `npm start` | Menjalankan server dalam mode produksi |
| `npm run dev` | Menjalankan server dengan nodemon |

### Frontend

| Script | Deskripsi |
|--------|-----------|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Build untuk produksi |
| `npm run preview` | Preview build hasil |
| `npm run lint` | Check kode dengan ESLint |

## 🤝 Kontribusi

Kontribusi selalu diterima! Berikut cara untuk berkontribusi:

1. **Fork** repository ini
2. **Clone** fork Anda
3. **Buat branch** untuk fitur: `git checkout -b fitur-amazing`
4. **Commit** perubahan: `git commit -m 'Add: fitur amazing'`
5. **Push** ke branch: `git push origin fitur-amazing`
6. **Buat Pull Request**

## 📝 Roadmap

- [ ] Implementasi chat real-time lengkap
- [ ] Push notifications
- [ ] File sharing dalam chat
- [ ] Voice messages
- [ ] Group chat
- [ ] Dark mode
- [ ] Multi-language support

## 📄 License

Project ini menggunakan [MIT License](LICENSE).

## 👥 Tim

- **Peter-sour** - *Initial work* - [@Peter-sour](https://github.com/Peter-sour)

## 💬 Support

Jika Anda menemukan bug atau memiliki saran, silakan:

- Buat [Issue](https://github.com/Peter-sour/Clavox/issues)
- Kirim email ke: [peter@example.com](mailto:peter@example.com)

---

<div align="center">
  <p>⭐ Jangan lupa beri star jika project ini membantu Anda!</p>
  <p>Made with ❤️ by Peter-sour</p>
</div>
