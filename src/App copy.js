import React from "react";
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import LandingHomeScreen from "./component/LandingHomeScreen";
import About from './component/About';
import Faq from './component/Faq';
import Contactus from './component/Contactus';
import PrivacyPolicy from './component/PrivacyPolicy';
import Cookies from './component/Cookies';
import CancellationPolicy from './component/CancellationPolicy';
import Refund from './component/Refund';
import TermsCondition from './component/TermsCondition';
import Subscription from './component/Subscription';


function Appcopy() {
  return (
    <div className="App">
      <BrowserRouter basename="/autoprofito_frontend">
        <Routes>
          <Route path="/" element={<LandingHomeScreen />} />
          <Route path="/landing_about" element={<About />} />
          <Route path="/landing_faq" element={<Faq />} />
          <Route path="/landing_contact" element={<Contactus />} />
          <Route path="/landing_privacy_policy" element={<PrivacyPolicy />} />
          <Route path="/landing_cookies" element={<Cookies />} />
          <Route path="/landing_cancellation_policy" element={<CancellationPolicy />} />
          <Route path="/landing_refund" element={<Refund />} />
          <Route path="/landing_terms_condition" element={<TermsCondition />} />
          <Route path="/landing_subscription" element={<Subscription />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Appcopy;
