import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClavoxLoadingScreen from "./pages/LoadingScreen";
import LoginScreen from "./pages/Auth/LoginScreen";
import OTPVerificationScreen from "./pages/Auth/OtpVerification";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loading" element={<ClavoxLoadingScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/verification" element={<OTPVerificationScreen/>} />
      </Routes>
    </Router>
  );
}

export default App;