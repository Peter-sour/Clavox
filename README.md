# Clavox 💬

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Ionic](https://img.shields.io/badge/Ionic-3880FF?style=for-the-badge&logo=ionic&logoColor=white)
![Capacitor](https://img.shields.io/badge/Capacitor-119EFF?style=for-the-badge&logo=capacitor&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node-dot-js&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socketdotio&logoColor=white)

Clavox adalah aplikasi chat real-time berbasis **React + Vite + Tailwind** untuk frontend, serta **Node.js + Express + Socket.IO** untuk backend.  
Aplikasi ini terintegrasi dengan **Ionic + Capacitor** sehingga bisa dijalankan sebagai **aplikasi mobile (Android/iOS)**.

---

## ✨ Fitur Utama

- 🔐 Autentikasi OTP & Nomor Telepon  
- 💬 Chat Realtime (Socket.IO)  
- 🎨 UI Modern menggunakan Tailwind CSS  
- 📱 Build ke Mobile App dengan Capacitor + Ionic  
- ⚡ Performa cepat berkat Vite + React  
- 🔧 Backend API dengan Node.js + Express  

---

## 📂 Struktur Proyek

```
Clavox/
├── backend/              # Server Node.js + Express
│   ├── src/              # Kode utama backend
│   ├── package.json
│   └── ...
├── frontend/             # Aplikasi React + Vite + Tailwind
│   ├── src/              # Kode utama frontend
│   ├── public/
│   ├── package.json
│   └── ...
├── capacitor.config.ts   # Konfigurasi Capacitor
├── README.md
└── ...
```

---

## 🚀 Quick Start

### 1. Clone Repository
```bash
git clone https://github.com/Peter-sour/Clavox.git
cd Clavox
```

### 2. Setup Backend
```bash
cd backend
npm install express socket.io cors dotenv
npm run dev   # server berjalan di http://localhost:5000
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm install react-router-dom
npm install react-phone-number-input libphonenumber-js --legacy-peer-deps
npm install react-otp-input
```

### 4. Tambahan Ionic & Capacitor
```bash
npm install --save-dev @capacitor/cli
npm install @capacitor/core
npm install @ionic/react @ionic/react-router ionicons
```

### 5. Jalankan Frontend
```bash
npm run dev   # berjalan di http://localhost:5173
```

### 6. Build & Integrasi Mobile
```bash
cd frontend
npm run build
npx cap sync
npx cap add android
npx cap add ios
npx cap open android   # buka di Android Studio
npx cap open ios       # buka di Xcode
```

---

## 🧑‍💻 Scripts

### Backend (/backend)
```bash
npm run dev       # mode development
npm start         # mode production
```

### Frontend (/frontend)
```bash
npm run dev       # jalankan frontend
npm run build     # build production
npm run preview   # preview build
```

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, Tailwind, Ionic, Capacitor
- **Backend**: Node.js, Express, Socket.IO

---

## 📌 Roadmap

- [ ] Push Notification
- [ ] Enkripsi End-to-End
- [ ] Dark Mode
- [ ] Deploy Backend ke Cloud

---


## 📜 Lisensi

Proyek ini dirilis di bawah MIT License.

---

## 💡 Support

Jika project ini membantu, jangan lupa beri ⭐ di repo ini!
