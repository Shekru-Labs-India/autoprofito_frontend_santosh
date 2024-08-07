import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import FAQs from "./FAQs";

function Pricing() {
  return (
    <div>
      <Nav />
      <div className="container m-5">
        <div className="text-center mb-5">
          <h4 className="fs-2">Pricing Plans</h4>
          <h5 className="mb-1 fs-5">
            All plans include 40+ advanced tools and features to boost your
            products.
          </h5>
          <h5 className="mt-1 fs-5">Choose the best plan to fit your needs.</h5>
        </div>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card" style={{ width: "85%" }}>
              <div className="card-body  ">
                <h3 className="card-title">Free</h3>
                <h4 className="card-text" style={{ color: "#8c57ff" }}>
                  <span style={{ fontSize: "1.5rem" }}>₹</span>
                  <span style={{ fontSize: "2.5rem" }}>0</span>/ month
                </h4>

                <p>A simple start for everyone</p>
                <ul className="text-center p-1  ps-4">
                  <li className="text-start p-1 ">
                    copy trades on <span className="fw-bold">1</span> student
                    account.(Excluding Master)
                  </li>
                  <li className="text-start p-1 ">
                    <span className="fw-bold">180 Days free</span> service
                  </li>
                  <li className="text-start p-1">
                    Reporting: Daily, Weekly, Monthly
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 ">
            <div className="card " style={{ width: "85%" }}>
              <div className="card-body">
                <h3 className="card-title">Pro</h3>
                <h4
                  className="card-text text-center"
                  style={{ color: "#8c57ff" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>₹</span>
                  <span style={{ fontSize: "2.5rem" }}>1999</span>/ month
                </h4>

                <p>A Simple start for everyone</p>
                <ul className="text-start p-1 ps-4">
                  <li className="text-start p-1">
                    copy trades on <span className="fw-bold">10</span> student
                    account.(Excluding Master)
                  </li>
                  <li className="text-start p-1">
                    <span className="fw-bold">180 Days free</span> service
                  </li>
                  <li className="text-start p-1">
                    Reporting: Daily, Weekly, Monthly
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card" style={{ width: "85%" }}>
              <div className="card-body">
                <h3 className="card-title">Prime</h3>
                <h4
                  className="card-text text-center"
                  style={{ color: "#8c57ff" }}
                >
                  <span style={{ fontSize: "1.5rem" }}>₹</span>
                  <span style={{ fontSize: "2.5rem" }}>4999</span>/ month
                </h4>

                <p>A Simple start for everyone</p>
                <ul className="text-start p-1 ps-4">
                  <li className="text-start p-1">
                    {" "}
                    copy trades on <span className="fw-bold ">20</span> student
                    account.(Excluding Master)
                  </li>
                  <li className="text-start p-1">
                    <span className="fw-bold">180 Days free</span> service
                  </li>
                  <li className="text-start p-1">
                    Reporting: Daily, Weekly, Monthly
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card " style={{ width: "85%", height: "335px" }}>
              <div className="card-body">
                <h3 className="card-title">Custom</h3>
                <p className="card-text p-9">
                  For all your custom needs please connect with our team.
                </p>

                <a href="#" className="btn btn-primary">
                  support shekruweb.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQs />
      <Footer />
    </div>
  );
}

export default Pricing;
