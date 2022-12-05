import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import PaymentManagement from "./components/payment-management/PaymentManagement";
import PaymentRegistration from "./components/payment-registration/PaymentRegistration";
import RegistrationComplete from "./components/registration-complete/RegistrationComplete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/management'} element={<PaymentManagement />} />
        <Route path={'/registration'} element={<PaymentRegistration />} />
        <Route path={'/complete'} element={<RegistrationComplete />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
