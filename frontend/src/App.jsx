import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ClavoxLoadingScreen from "./pages/LoadingScreen";
import LoginScreen from "./pages/Auth/LoginScreen";
import OTPVerificationScreen from "./pages/Auth/OtpVerification";
import RegisterScreen from "./pages/Auth/RegisterScreen";
import SuccessScreen from "./components/common/SuccessScreen";
import ProcessingScreen from "./components/common/ProcessingScreen";
import OTPPage from "./verification/OTPpage";

// ✨ Impor UserProvider
import { UserProvider } from './components/common/AppContext';

function App() {
  return (
    <UserProvider> {/* Bungkus semua routes dengan UserProvider */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/loading" />
          </Route>
          <Route path="/loading" component={ClavoxLoadingScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/verification" component={OTPVerificationScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/success" component={SuccessScreen} />
          <Route path="/processing" component={ProcessingScreen} />
          <Route path="/verify-otp" component={OTPPage} />
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
