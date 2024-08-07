import React from 'react';
import { Link } from 'react-router-dom';


const LandingHeader = () => {
  return (
    <nav class="layout-navbar  shadow-none py-0 bg-white border border-bottom" >

 <div class="navbar navbar-expand-lg landing-navbar border-top-0 px-4 px-md-8">
 <div class="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-6">
            <button className="navbar-toggler border-0 px-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="tf-icons ri-menu-fill ri-24px align-middle"></i>
            </button>
            <Link to="/" className="app-brand-link">
              <span className="app-brand-logo demo">
                <span>
                  <div className="avatar">
                    <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="autoprofito Logo" className="w-px-40 h-auto rounded-circle" />
                  </div>
                </span>
              </span>
              <span className="app-brand-text demo menu-text fw-semibold ms-2 ps-1 text-black">AutoProfito</span>
            </Link>
          </div>
          <div className="collapse navbar-collapse landing-nav-menu" id="navbarSupportedContent">
            <button className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="tf-icons ri-close-fill"></i>
            </button>
            <ul className="navbar-nav me-auto p-4 p-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-medium" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" aria-current="page" to="/landing_subscription">Pricing</Link>
              </li>
             
                <li className="nav-item">
                <Link className="nav-link fw-medium text-nowrap" to="/landing_about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium text-nowrap" to="/landing_contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="landing-menu-overlay d-lg-none"></div>
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* <ThemeSwitcher /> */}
          
            <li><Link to="/signup" className='me-3 text-black'> Signup</Link></li>
            <li>
              <Link to="/commonlogin" className="btn rounded-pill btn-label-info me-3" ><span className="d-none d-md-block ">Login</span></Link>


            </li>
            <li class="nav-item dropdown-style-switcher dropdown me-4 me-xl-0">
        <i class="  ri ri-sun-line me-5 fs-4"  data-bs-toggle="dropdown">

        </i>
        <ul class="dropdown-menu dropdown-menu-end dropdown-styles">
          <li>
            <a class="dropdown-item" href="javascript:void(0);" data-theme="light">
              <span class="align-middle"><i class='ri-sun-line ri-24px me-3'></i>Light</span>
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="javascript:void(0);" data-theme="dark">
              <span class="align-middle"><i class="ri-moon-clear-line ri-24px me-3"></i>Dark</span>
            </a>
          </li>
          </ul>
         </li>
          </ul>
        </div>
      
      </nav>
      
   
  );
}

export default LandingHeader;



