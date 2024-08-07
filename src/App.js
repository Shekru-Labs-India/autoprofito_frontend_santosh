import React from 'react'
import './index.css'
import { BrowserRouter as BrowserRouter, Route, Routes} from "react-router-dom";
import FAQsDetails from './components/FAQsDetails'
import Pricing from './components/Pricing'
import About from './components/About'
import CookiePolicy from './components/CookiePolicy'
import TermsAndConditions from './components/TermsAndConditions'
import useScrollToTop from './useScrollToTop';
import NotFoundPage from './components/NotFoundPage';




function App() {

 
  return (
    <>
     <div className="App">
      <BrowserRouter basename="/autoprofito_frontend_santosh">
      <ScrollToTop>
        <Routes>
         <Route path="/" element={<About />}/>
          <Route path="/autoprofito_frontend_santosh/cookies" element={<CookiePolicy />} />          
          <Route path="/autoprofito_frontend_santosh/faq" element={<FAQsDetails />} />         
          <Route path="/autoprofito_frontend_santosh/termsAndconditions" element={<TermsAndConditions />} />
          <Route path="/autoprofito_frontend_santosh/subscription" element={<Pricing />} />
          <Route path="/autoprofito_frontend_santosh/NotFoundPage" element={<NotFoundPage />} />
          
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </div>
      
    </>
  )
}
const ScrollToTop = ({ children }) => {
  useScrollToTop();
  return children;
};

export default App
