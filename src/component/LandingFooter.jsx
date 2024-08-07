import React from 'react';
import { Link } from 'react-router-dom';
import footerbg from '../assets/img/front-pages/backgrounds/footer-bg.png';


import daisy from "../assets/img/illustrations/illustration-john-2.png"
const LandingFooter = () => {
  return (
    <div>
            <div data-bs-spy="scroll" class="scrollspy-example   ">

        <div className="container bg-white ">

<div class="col-lg-12 col-12">
    
      <div class="row ">
        <div class="col-md-6">
          <div class="card-body">
            <h4 class="card-title text-truncate mb-9">Start youe free account today</h4>
            <p class="mb-0">Explore the best copy trading platforms in India, supporting major Indian brokers </p>
            <p class="mb-0">like Zerodha, Angel Broking, Dhan & more across NSE, BSE, and MCX exchanges..</p>
            <div className='btn btn-primary mt-5'>Start your free account now</div>
<p className='ms-12'>No hidden charges</p>
          </div>
        </div>
        <div class="col-md-6 position-relative text-center">
          <img src={daisy}  style= {{height:"250px"}}class="card-img-position bottom-0 w-auto end-0 scaleX-n1-rtl" alt="View Profile"/>
        </div>
      </div>
    </div>
  </div>

<div className='container bg-white mt-7 mb-10 '>
 <section class="section pricing-faqs rounded-bottom">

    <div class="text-center mb-6 ">
      <h4 class="mb-2">FAQ's</h4>
      <p>Let us help answer the most common questions.</p>
    </div>
    <div id="faq" class="accordion">
      <div class="accordion-item mb-3 ">
        <h6 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="#faq-1" aria-controls="faq-1">
            What counts towards the 100 responses limit?
          </button>
        </h6>

        <div id="faq-1" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body">
            We count all responses submitted through all your forms in a month.
            If you already received 100 responses this month, you won’t be able to receive any more of them until next
            month when the counter resets.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 ">
        <h6 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-2" aria-expanded="false" aria-controls="faq-2">
            How do you process payments?
          </button>
        </h6>
        <div id="faq-2" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body">
            We accept Visa®, MasterCard®, American Express®, and PayPal®.
            So you can be confident that your credit card information will be kept
            safe and secure.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 ">
        <h6 class="accordion-header">
          <button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq-3" aria-expanded="false" aria-controls="faq-3">
            What payment methods do you accept?
          </button>
        </h6>
        <div id="faq-3" class="accordion-collapse collapse " data-bs-parent="#faq">
          <div class="accordion-body">
            2Checkout accepts all types of credit and debit cards.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 ">
        <h6 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-4" aria-expanded="false" aria-controls="faq-4">
            Do you have a money-back guarantee?
          </button>
        </h6>
        <div id="faq-4" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body">
            Yes. You may request a refund within 30 days of your purchase without any additional explanations.
          </div>
        </div>
      </div>

      <div class="accordion-item mb-3 ">
        <h6 class="accordion-header">
          <button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq-5" aria-expanded="false" aria-controls="faq-5">
            I have more questions. Where can I get help?
          </button>
        </h6>
        <div id="faq-5" class="accordion-collapse collapse" data-bs-parent="#faq">
          <div class="accordion-body">
            Please <a href="javascript:void(0);">contact</a> us if you have any other questions or concerns. We’re
            here to help!
          </div>
        </div>
      </div>
     

  

  </div>

</section>
<div className='text-center  '>
<Link to="/landing_faq"><div className='btn btn-info btn-center mt-5'>View All FAQ<i className='ri ri-telegram-line ri-lg ms-3'></i></div>
</Link>
</div>
<div className='h-40'></div>
</div>
      <section id="landingFunFacts" className="section-py  landing-fun-facts py-12 my-4 bg-white">
        <div className="container d-flex flex-column align-items-center justify-content-center text-center mx-auto">
          <h2 className="h4">Still have questions?</h2>
          <p>Please describe your case to receive the most accurate advice.</p>
          <Link to="/landing_contact" className="btn btn-primary">Contact us</Link>
        </div>
      </section>

     

      <div className="landing-footer">
        <div className="footer-top position-relative overflow-hidden">
          <img src={footerbg} alt="footer bg" className="footer-bg banner-bg-img" />
          <div className="container position-relative">
            <div className="row gx-0 gy-7 gx-sm-6 gx-lg-12">
              <div className="col-lg-5">
                <div className="app-brand-link mb-6">
                  <div className="avatar">
                    <img src={`${process.env.PUBLIC_URL}/favicon.png`} alt="autoprofito Logo" className="w-px-40 h-auto rounded-circle" />
                  </div>
                  <span className="app-brand-text demo footer-link fw-semibold ms-1">AutoProfito</span>
                </div>
                <p className="footer-text px-0 footer-logo-description">
               <p> AutoProfito (Product of Shekru Labs India Pvt. Ltd.) is a technology provider and not a wealth manager, investment advisor, or portfolio management service. All transactions through AutoProfito are the user's responsibility, and we cannot be held liable for any user actions.</p>
              <p>We strive for transparency, but the responsibility for any selection or transaction rests with the user.</p>
                </p>
              
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3">
                <h6 className="footer-title mb-4 mb-lg-6">Pages</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-4">
                    <Link to="/" className="footer-link">Home</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/commonlogin" className="footer-link">Login</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/signup" className="footer-link"> Signup</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/landing_faq" className="footer-link">FAQ</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/landing_subscription" className="footer-link">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-3">
                <h6 className="footer-title mb-4 mb-lg-6">Important</h6>
                <ul className="list-unstyled mb-0">
                  <li className="mb-4">
                    <Link to="/landing_privacy_policy" className="footer-link">Privacy Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/landing_cookies" className="footer-link">Cookies Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/landing_cancellation_policy" className="footer-link">Cancellation Policy</Link>
                  </li>
                  <li className="mb-4">
                    <Link to="/landing_refund" className="footer-link">Refund Policy</Link>
                  </li>
                  <li>
                    <Link to="/landing_terms_condition" className="footer-link">Terms and Condition</Link>
                  </li>
                </ul>
              </div>
               <div className="col-lg-3 col-md-4 col-sm-6">
               <div className='text-center'>
    <a href="https://www.facebook.com/autoprofito" className="footer-link me-4" target="_blank"><i className="ri-facebook-circle-fill ri-3x"></i></a>
    <a href="https://www.instagram.com/" className="footer-link me-4" target="_blank"><i className='ri-instagram-line ri-3x'></i></a>
    <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank"><i className="ri-youtube-line ri-3x"></i></a>
   
    <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank"><i className="ri-youtube-line ri-3x"></i></a>
</div>

             <div className='mt-10'>
              <p className="footer-text px-0 footer-logo-description">
              <i className="ri-map-pin-line ri-lg"></i>  Shekru Labs India, 2nd Floor, Manogat Appt Muktangan English School & Jr College, Sahakar Nagar, Pune, 411009</p>
              </div>
              <p className="footer-text px-0 footer-logo-description">
            <i className='ri ri-mail-line ri-lg'></i>  shekrulabs@gmail.com
             </p>
           
              </div> 
            </div>
          </div>
        </div>
        <div className="footer-bottom  bg-body">
          <div className="container d-flex flex-wrap justify-content-center flex-md-row flex-column text-center text-md-center">
            <div className=" text-center mt-2 ">
              <p className="text-black ">
            Shekru Labs India, 2nd Floor, Manogat Appt.,Muktangan English School & Jr College,Sahakar Nagar, Pune, 411009
            <p className="text-black">Email: shekrulabs@gmail.com  | CIN: U74999PN2018PTC174371  </p>            

            </p>  
         
            </div>
            
          </div>
        </div>
        <div className="footer-bottom py-5">
          <div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
          <div className="mb-2 mb-md-0">
              <span className="footer-text">
                <p> &copy;  Copyright. all rights. reserved.</p>
              </span>
            </div>
            <div>
              <a href="https://www.facebook.com/autoprofito " className="footer-link me-4" target="_blank"><i className="ri-facebook-circle-fill ri-xl"></i></a>
              <a href="https://www.instagram.com/" className="footer-link me-4" target="_blank"><i className='ri-instagram-line ri-xl'></i></a>
              <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A " className="footer-link me-4" target="_blank"><i className="ri-youtube-line ri-xl"></i></a>
              <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank"><i className="ri-youtube-line ri-xl"></i></a>

            </div>
           
            <div className="mb-2 mb-md-0">
              <span className="footer-text">
                <p>Powered by <a href="https://www.shekruweb.com" target="_blank">Shekru Labs India Pvt. Ltd.</a></p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LandingFooter;
