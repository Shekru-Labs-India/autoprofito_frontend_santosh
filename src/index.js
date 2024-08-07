import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/saga-blue/theme.css'; // PrimeReact theme
import 'primereact/resources/primereact.min.css'; // PrimeReact core CSS
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import "./assets/vendor/css/pages/front-page-landing.css"
import "./assets/vendor/css/pages/front-page.css"
import "./assets/vendor/css/pages/front-page-pricing.css"
import "./assets/css/demo.css";

import "./assets/vendor/css/rtl/core.css";
import "./assets/vendor/css/rtl/theme.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App/> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
