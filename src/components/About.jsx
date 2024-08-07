import React from "react";
import Nav from "./Nav";
import FAQs from "./FAQs";
import Footer from "./Footer";
import logo from "../assets/img/logo (2) (1).png";

function About() {
  return (
    <>
      <Nav />

      <div className="container custom-container mt-0">
    <div className="row mb-5 text-center">
      <div className="col-12">
        <h2 style={{ marginBottom: '5px' }}>About AutoProfito</h2>
        <p>Let us help answer the most common questions.</p>
      </div>
    </div>
    <div className="row align-items-center">
      <div className="col-lg-6 col-12 mb-3 mb-lg-0">
        <h3>Autoprofito is simply used to manage Demat Accounts of your Students</h3>
      </div>
      <div className="col-lg-6 col-12 text-center">
        <img
          src={logo}
          alt="Description of Image"
          className="img-fluid custom-img"
        />
      </div>
    </div>
    <div className="row mt-3">
      <div className="col-lg-6 col-12 mb-4">
        <p>
          Autoprofito has been the industry's standard demat account since the 20's, when an unknown printer took a galley of type
          manager scrambled it to make a type specimen book. It has survived not centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s, with the release sheets containing
          lorem ipsum passages, and more. scrambled it to make a type specimen book. It has survived not centuries, but also the
          leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s, with the release
          sheets containing lorem ipsum passages, and more.
        </p>
      </div>
      <div className="col-lg-6 col-12">
        <div className="row">
          <div className="col-sm-6 mb-4">
            <div className="card shadow-none bg-transparent border border-secondary" style={{ height: '100px', maxWidth: '250px' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-secondary fw-bold">3.5</h3>
                <p className="card-text text-secondary">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-4">
            <div className="card shadow-none bg-transparent border border-secondary" style={{ height: '100px', maxWidth: '250px' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-secondary fw-bold">23</h3>
                <p className="card-text text-secondary">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-4">
            <div className="card shadow-none bg-transparent border border-secondary" style={{ height: '100px', maxWidth: '250px' }}>
              <div className="card-body text-center">
                <h3 className="card-title text-secondary fw-bold">830+</h3>
                <p className="card-text text-secondary">Lorem Ipsum</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mb-4">
            <div className="card shadow-none bg-transparent border border-secondary" style={{ height: '100px', maxWidth: '250px' }}>
              <div className="card-body text-center">
                <h5 className="card-title text-secondary fw-bold">200K</h5>
                <p className="card-text text-secondary">Lorem Ipsum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

      <FAQs/>
      <Footer />
    </>
  );
}

export default About;
