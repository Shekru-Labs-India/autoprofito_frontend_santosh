import React from 'react'

import edit from "../assets/img/front-pages/icons/transition-up.png"
import edit2 from "../assets/img/front-pages/icons/laptop-charging.png"

const ServicesOffered = () => {
  return (
    <div>
          <div data-bs-spy="scroll" className="scrollspy-example">
        <section id="landingTeam" className="section-py landing-team ">
      <div className="container bg-icon-left position-relative ">

        <h6 className="text-center d-flex justify-content-center align-items-center mb-6">
          
          <span className="text-black fs-4">Services we offer</span>
        </h6>

        <div className="row gy-4 pt-lg-4 mt-6">
          
          {/* <!-- Favourite Plan: Start --> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md h-100"  >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-2 mt-5">
                    <img src={edit} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Trade Automation</h4>

                  <p className="mb-3 text-center">Automate trade from Master account to other child accounts with cross broker operation.</p>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Favourite Plan: End -->
          <!-- Favourite Plan: Start --> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md" >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-2 mt-5">
                    <img src={edit} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Dynamic Multiplier</h4>

                  <p className="mb-3 text-center">Place trades in multiple custom quantities in child accounts.</p>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Favourite Plan: End -->
          <!-- Favourite Plan: Start --> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md" >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-2 mt-5">
                    <img src={edit2} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Automated Login</h4>

                  <p className="mb-3 text-center">Add your broker account and enjoy the automated loging on every trading day.</p>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Favourite Plan: End -->
          <!-- Favourite Plan: Start --> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md" >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-2 mt-5">
                    <img src={edit2} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Monitoring and Management</h4>

                  <p className="mb-3 text-center">Monitor child accounts from one single dashboard / Emergency exit feature.</p>
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Favourite Plan: End -->
          <!-- Favourite Plan: Start --> */}
          <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md" >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-2 mt-5">
                    <img src={edit2} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Customised Plans</h4>

                  <p className="mb-3 text-center">Get your own custom plan based on your required number of accounts.</p>
                </div>

              </div>
            </div>
          </div>
         

          {/* <!-- Standard Plan: Start --> */}
                  <div className="col-xl-4 col-lg-6">
            <div className="card border-white border-2 shadow-md" >
              <div className="card-header border-0">
                
                <div className="d-flex align-items-center justify-content-center">
                  
                  <div className="features-icon mb-4 mt-5">
                    <img src={edit2} className="image-rounded" alt="edit" />
                  </div>
                  
                </div>
              </div>
              <div className="card-body">
                
                <div className="d-flex mt-5 justify-content-center align-items-center flex-wrap">
                  <h4 className="mb-5 text-center">Favourite Plan</h4>

                  <p className="mb-3 text-center">Automate trading in multiple accounts with no software installation and VPS requirement.</p>
                  
                </div>

              </div>
            </div>
          </div>
          {/* <!-- Standard Plan: End --> */}
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default ServicesOffered
