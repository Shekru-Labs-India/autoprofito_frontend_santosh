import React from 'react';
import { Link } from 'react-router-dom';

import img from "../assets/laptop_home_page-removebg.png";
import LandingHeader from './LandingHeader';
const LandingHero = () => {
  return (
    <div>
      {/* Hero: Start */}


      <LandingHeader></LandingHeader>
      <div className='container bg-white'>
      <div data-bs-spy="scroll" class="scrollspy-example   ">

      <section id="landingHero" className="section-py landing-hero  ">
      
     
  <div className="row">
    {/* Text content on the right */}
    <div className="col-lg-6 text-center">
      <div className="hero-text-box ">
        <h2 className="text-black hero-title  mb-4 ">AutoProfito</h2>
        <h2 className="h6 mb-4 lh-md">
          <span className='fs-5'>Account Management</span>
          <br />
          Explore the best copy trading platforms in India, supporting major Indian brokers like Zerodha,fyers ,finvasia and alice.
        </h2>
        <Link to="/commonlogin" className="btn rounded-pill btn-label-info me-6">
        <span className=''>  Log in</span> 
        </Link>
        <Link to="/" className="btn rounded-pill btn-label-light border border-dark ms-6">
        <span className='text-black'>Free Demo</span> 
        </Link>
      </div>
    </div>
    
    {/* Image on the left */}
    <div className="col-lg-6 position-relative">
      <div className="hero-dashboard-img text-center">
        <img
          src={img}
          alt="hero dashboard"
          className="animation-img img-fluid"
          data-speed="2"
     
       
        />
      </div>
     
    </div>
  </div>


      </section>
      </div>
      </div>
      </div>
  );
};

export default LandingHero;
