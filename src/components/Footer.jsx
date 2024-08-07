import React from "react";
import footerbg from  '../assets/img/front-pages/backgrounds/footer-bg.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      
        {/* Footer 15 - Bootstrap Brain Component */}
        <div className="landing-footer mt-5">
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
                        <p>AutoProfito (Product of Shekru Labs India Pvt. Ltd.) is a technology provider and not a wealth manager, investment advisor, or portfolio management service. All transactions through AutoProfito are the user's responsibility, and we cannot be held liable for any user actions.</p>
                        <p>We strive for transparency, but the responsibility for any selection or transaction rests with the user.</p>
                    </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3">
                    <h6 className="footer-title mb-4 mb-lg-6">Pages</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-4">
                            <a href="#" className="footer-link">Home</a>
                        </li>
                        <li className="mb-4">
                            <a href="/commonlogin" className="footer-link">Login</a>
                        </li>
                        <li className="mb-4">
                            <a href="/signup" className="footer-link">Signup</a>
                        </li>
                        <li className="mb-4">
                            <Link to="/autoprofito_frontend_santosh/faq" className="footer-link">FAQ</Link>
                        </li>
                        <li className="mb-4">
                        <Link to="/autoprofito_frontend_santosh/subscription" className="footer-link ">Pricing</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-3">
                    <h6 className="footer-title mb-4 mb-lg-6">Important</h6>
                    <ul className="list-unstyled mb-0">
                        <li className="mb-4">
                            <a href="/landing_privacy_policy" className="footer-link">Privacy Policy</a>
                        </li>
                        <li className="mb-4">
                            <Link to="/autoprofito_frontend_santosh/cookies" className="footer-link">Cookies Policy</Link>
                        </li>
                        <li className="mb-4">
                            <a href="/landing_cancellation_policy" className="footer-link">Cancellation Policy</a>
                        </li>
                        <li className="mb-4">
                            <a href="/landing_refund" className="footer-link">Refund Policy</a>
                        </li>
                        <li>
                            <Link to="/autoprofito_frontend_santosh/termsAndconditions" className="footer-link">Terms and Condition</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                    <div className='text-center'>
                        <a href="https://www.facebook.com/autoprofito" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-circle-fill ri-3x"></i></a>
                        <a href="https://www.instagram.com/" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className='ri-instagram-line ri-3x'></i></a>
                        <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-line ri-3x"></i></a>
                        <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-line ri-3x"></i></a>
                    </div>
                    <div className='mt-10'>
                        <p className="footer-text px-0 footer-logo-description">
                            <i className="ri-map-pin-line ri-lg"></i> Shekru Labs India, 2nd Floor, Manogat Appt Muktangan English School & Jr College, Sahakar Nagar, Pune, 411009
                        </p>
                    </div>
                    <p className="footer-text px-0 footer-logo-description">
                        <i className='ri ri-mail-line ri-lg'></i> shekrulabs@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div className="footer-bottom bg-body">
        <div className="container d-flex flex-wrap justify-content-center flex-md-row flex-column text-center text-md-center">
            <div className="text-center mt-2">
                <p className="text-black">
                    Shekru Labs India, 2nd Floor, Manogat Appt., Muktangan English School & Jr College, Sahakar Nagar, Pune, 411009
                    <p className="text-black">Email: shekrulabs@gmail.com | CIN: U74999PN2018PTC174371</p>
                </p>
            </div>
        </div>
    </div>
    <div className="footer-bottom py-5">
        <div className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
            <div className="mb-2 mb-md-0">
                <span className="footer-text">
                    <p>&copy; Copyright. all rights. reserved.</p>
                </span>
            </div>
            <div>
                <a href="https://www.facebook.com/autoprofito" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-circle-fill ri-xl"></i></a>
                <a href="https://www.instagram.com/" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className='ri-instagram-line ri-xl'></i></a>
                <a href="https://www.youtube.com/channel/UCgfTIIUL16SyHAQzQNmM52A" className="footer-link me-4" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-line ri-xl"></i></a>
            </div>
            <div className="mb-2 mb-md-0">
                <span className="footer-text">
                    <p>Powered by <a href="https://www.shekruweb.com" target="_blank" rel="noopener noreferrer">Shekru Labs India Pvt. Ltd.</a></p>
                </span>
            </div>
        </div>
    </div>
</div>

      
    </>
  );
}

export default Footer;
