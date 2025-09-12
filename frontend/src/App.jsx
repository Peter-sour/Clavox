import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClavoxLoadingScreen from "./components/LoadingScreen";
import LoginScreen from "./components/LoginScreen";
import OTPVerificationScreen from "./components/OTPVerificationScreen";


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