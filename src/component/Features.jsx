import React from 'react'

import transation from "../assets/img/front-pages/icons/transition-up.png"
import edit from "../assets/img/front-pages/icons/edit.png"

import faq from "../assets/img/character_7.png"
import user from "../assets/img/ic_glass_users.png"
import user2 from "../assets/img/ic_glass_message.png"
import user3 from "../assets/img/ic_glass_buy.png"       
const Features = () => {
  return (
    <div>
        {/* <!-- Useful features: Start --> */}
    <section id="landingReviews"  className="section-py bg-body landing-reviews">
      <div className="container">
        <h6 className="text-center d-flex justify-content-center align-items-center mb-6">
         
          <strong className='fs-4' >What AutoProfito Help you?</strong>
        </h6>

        <div className="features-icon-wrapper row gx-0 mt-6 gy-12 gx-sm-6">
          <div className="col-lg-4 col-sm-6 text-center features-icon-box">
            <div className="features-icon mb-6 mt-6">
              <img src={transation} alt="transition up" />
            </div>
            <h5 className="mb-3">Cloud Based</h5>
            <p className="features-icon-description">
              Fully cloud based automated system with simple automation and easy to use algorithmic trading system.
            </p>
          </div>
          <div className="col-lg-4 col-sm-6 text-center bg-white card shadow-lg features-icon-box">
            <div className="card-body">
              <div className="features-icon mb-6 mt-6">
                <img src={edit} alt="edit" />
              </div>
              <h5 className="mb-3">Multiple Accounts</h5>
              <p className="features-icon-description">
                Automate trading in multiple accounts with no software installation and VPS requirement.
              </p>
            </div>
            
          </div>
          <div className="col-lg-4 col-sm-6 text-center features-icon-box">
            <div className="features-icon mb-6 mt-6">
              <img src={transation} alt="laptop charging" />
            </div>
            <h5 className="mb-6">Rapid Scale up in cloud</h5>
            <p className="features-icon-description">
              Add as many accounts as you want with custom plans with practical features.
            </p>
          </div>
      </div>
      </div>
    </section>
    {/* <!-- Useful features: End --> */}

{/* 
    <!-- FAQ: Start --> */}
     <div className="container bg-white bg-icon-right">
    <section id="landingFAQ" className="section-py  landing-faq">
     
        <div className="row gy-5">
          <div className="col-lg-7">
            <div className="text-center">
              <img src={faq}alt="sitting girl with laptop" className="faq-image scaleX-n1-rtl" />
            </div>
          </div>
          <div className="col-lg-5">
            <h2 className="text-start h4 p-2">
              Join the trading revolution with AutoProfito
            </h2>
            <p className="p-2">
              At QuantBot you will get the tools used by BIG PLAYERS at your fingertip, come and join the revolution at lowest possible cost
              <p className="my-2">                
                <i className="ri-check-double-line"></i>&nbsp; Highly secured cloud infrastructure <br />
                <i className="ri-check-double-line"></i>&nbsp; Fast trade execution in multiple brokers <br />
                <i className="ri-check-double-line"></i>&nbsp; Simultaneous trade execution in multiple Brokers and Multiple accounts 
              </p>
              Our mission is to create an easy to use algotrading platform mainly for retail traders and make them get the best out of it. Technology is out primary edge and the market is dominated by algorithmic trading, take the fast movers advantage.
            </p>
            
          </div>
        </div>
     
    </section>

    <section id="landingFunFacts" className="section-py landing-fun-facts py-12 my-4 ">
      <div className="container">
        <div className="row gx-0 gy-5 gx-sm-6">
          
         <div className="col-xl-4 col-lg-6">
            <div className="card shadow-md justify-content-center text-center align-item-center rounded-lg">

              <div className="card-body bg-body">
                <img src={user} alt="user image" className="my-3 "/>
                <h3 className="fw-bold mb-0 fun-facts-text mb-2">149+</h3>
                <h6 className="mb-0 text-body">Demat Accounts</h6>

              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card shadow-md justify-content-center text-center align-item-center rounded-lg">

              <div className="card-body bg-body">
                <img src={user2} alt="user image" className="my-3 "/>
                <h3 className="fw-bold mb-0 fun-facts-text mb-2">1315+</h3>
                <h6 className="mb-0 text-body">Demat Accounts</h6>

              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card shadow-md justify-content-center text-center align-item-center rounded-lg">

              <div className="card-body bg-body">
                <img src={user3} alt="user image" className="my-3 "/>
                <h3 className="fw-bold mb-0 fun-facts-text mb-2">1749+</h3>
                <h6 className="mb-0 text-body">Order Placed</h6>

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default Features
