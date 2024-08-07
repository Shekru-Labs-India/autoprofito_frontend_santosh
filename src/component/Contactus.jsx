
import location from "../assets/img/pin-location-icon.png";

import email from "../assets/img/pngimg.com - email_PNG22.png";

import LandingHeader from './LandingHeader';
import LandingFooter from './LandingFooter';
import { useEffect } from "react";

const Contactus = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <LandingHeader />
      <div data-bs-spy="scroll" class="scrollspy-example   ">

      <section id="landingContact" className="section-py bg-body pb-0  landing-contact">
        <div className="container bg-icon-left position-relative pb-0 ">
          <h6 className="text-center d-flex justify-content-center align-items-center">
            <span className="fs-3 mb-6">Contact Us</span>
          </h6>
          <div className='row mb-12'>
            {/* Left Side */}
            <div className='col-6'>
              {/* Address Card */}
              <div className="card shadow-md justify-content-center text-center align-item-center rounded-lg mb-5">
                <div className="card-body">
                  <img src={location} alt="address image" className="my-3" width="40px" height="50px" />
                  <h3 className="fw-bold mb-0 fun-facts-text mb-2">Address</h3>
                  <p className="mb-0 text-body">Shekru labs India Office no 6,2nd Floor Manogat Appt Near Muktangan,Sahakar nagar, Pune Maharashtra-411037</p>
                </div>
              </div>
              {/* Email Card */}
              <div className="card shadow-md justify-content-center text-center align-item-center rounded-lg">
                <div className="card-body">
                  <img src={email} width="80" height="80" alt="email image" />
                  <h3 className="fw-bold mb-0 fun-facts-text mb-2">Email</h3>
                  <p className="mb-0 text-body">shekrulabs@gmail.com
                   
                  </p>
                </div>
              </div>
            </div>
            {/* Right Side */}
            <div className='col-6'>
              {/* Google Map */}
              <iframe  className="border border-1 h-100 w-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d60546.61190780662!2d73.8817008!3d18.4762634!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1982877f07b%3A0x1627e42ae3e8b0c2!2sShekru%20labs%20India%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1721297839298!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
      </div>
      <LandingFooter />
    </div>
  );
}

export default Contactus;
