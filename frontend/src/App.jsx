import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ClavoxLoadingScreen from "./pages/LoadingScreen";
import LoginScreen from "./pages/Auth/LoginScreen";
import OTPVerificationScreen from "./pages/Auth/OtpVerification";
import RegisterScreen from "./pages/Auth/RegisterScreen";
import SuccessScreen from "./components/common/SuccessScreen"; // ✨ Impor SuccessScreen
import ProcessingScreen from "./components/common/ProcessingScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/loading" />
        </Route>
        <Route path="/loading" component={ClavoxLoadingScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/verification" component={OTPVerificationScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/success" component={SuccessScreen} /> {/* ✨ Tambahkan rute ini */}
        <Route path="/processing" component={ProcessingScreen} />
      </Switch>
    </Router>
  );
}

export default App;