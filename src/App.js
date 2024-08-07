import React from 'react'
import './index.css'
import { BrowserRouter as BrowserRouter, Route, Routes} from "react-router-dom";
import FAQsDetails from './components/FAQsDetails'
import Pricing from './components/Pricing'
import About from './components/About'
import CookiePolicy from './components/CookiePolicy'
import TermsAndConditions from './components/TermsAndConditions'
import useScrollToTop from './useScrollToTop';



function App() {

 
  return (
    <>
     <div className="App">
      <BrowserRouter basename="/autoprofito_frontend">
      <ScrollToTop>
        <Routes>
         <Route path="/" element={<About />}/>
          <Route path="/autoprofito_frontend/cookies" element={<CookiePolicy />} />          
          <Route path="/autoprofito_frontend/faq" element={<FAQsDetails />} />         
          <Route path="/autoprofito_frontend/termsAndconditions" element={<TermsAndConditions />} />
          <Route path="/autoprofito_frontend/subscription" element={<Pricing />} />
          
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