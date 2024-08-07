import React from "react";
import john from "../assets/img/illustrations/illustration-john.png";
import { Link } from "react-router-dom";

function FAQs() {
  return (
    <>
      <div className="col-md m-10">
        <div className="card " style={{ height: "240px", marginTop: "80px" }}>
          <div className="row">
            <div className="col-md-6">
              <div className="card-body text-start">
                <h4 className="card-title text-truncate mb-4">
                  Start your free account today
                </h4>
                <div className="mb-3">
                  <p className="mb-0">
                    Explore the best trading platform in India, supporting major
                    Indian
                  </p>
                  <p className="mb-0">
                    brokers like Zerodha, Angle Broking, Dhan & more across NSE,
                    BSE,and MCX exchanges.
                  </p>
                </div>
                <div
                  className="d-flex flex-column align-items-left mt-5"
                  style={{ width: "fit-content" }}
                >
                  <a
                    href="javascript:;"
                    className="btn btn-sm btn-primary rounded-pill waves-effect waves-light "
                  >
                    Start your free account now
                  </a>
                  <p className="mt-2 text-center mb-0">No hidden charges</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative text-center">
              <img
                src={john}
                className="img-fluid"
                style={{
                  height: "280px",
                  width: "auto",
                  top: "-40px",
                  position: "relative",
                  transform: "scaleX(-1)",
                  maxWidth: "100%",
                }}
                alt="View Profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-4 shadow-none">
        <div className="card-body">
          <div className="text-center mb-5 ">
            <h4 className=" mb-1">FAQ's</h4>
            <p className="mb-10">
              Let us help answer the most common questions.
            </p>
          </div>

          <div className="container ">
            <div className="row">
              <div className="col-md-4 col-xxl-4 mb-4">
                {/* Added margin-bottom */}
                <div className="card h-100 shadow-none border-2">
                  <div className="card-header d-flex align-items-center justify-content-left">
                    <div className="d-flex align-items-left">
                      <i className="fa-solid fa-cart-shopping fs-2 text-primary rounded me-2" />
                      <h5 className="card-title mb-0">Buying</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-md mb-6 mb-md-2">
                      <div className="accordion mt-2" id="accordionExample1">
                        <div className="accordion-item rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingOne1">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionOne1"
                              aria-expanded="false"
                              aria-controls="accordionOne1"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionOne1"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              Lemon drops chocolate cake gummies carrot cake
                              chupa chups muffin topping. Sesame snaps icing
                              marzipan gummi bears macaroon dragée danish
                              caramels powder. Bear claw dragée pastry topping
                              soufflé. Wafer gummi bears marshmallow pastry pie.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingTwo1">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionTwo1"
                              aria-expanded="false"
                              aria-controls="accordionTwo1"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionTwo1"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo1"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              Dessert ice cream donut oat cake jelly-o pie sugar
                              plum cheesecake. Bear claw dragée oat cake dragée
                              ice cream halvah tootsie roll. Danish cake oat
                              cake pie macaroon tart donut gummies. Jelly beans
                              candy canes carrot cake. Fruitcake chocolate chupa
                              chups.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingThree1">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionThree1"
                              aria-expanded="false"
                              aria-controls="accordionThree1"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionThree1"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree1"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFour1">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFour1"
                              aria-expanded="false"
                              aria-controls="accordionFour1"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFour1"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour1"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFive1">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFive1"
                              aria-expanded="false"
                              aria-controls="accordionFive1"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFive1"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive1"
                            data-bs-parent="#accordionExample1"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/autoprofito_frontend/faq">
                      <div className="text-primary">
                        See all 10 articles
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xxl-4 mb-4">
                {/* Added margin-bottom */}
                <div className="card h-100 shadow-none border-2">
                  <div className="card-header d-flex align-items-center justify-content-left">
                    <div className="d-flex align-items-left">
                      <i className="fa-solid fa-cart-shopping fs-2 text-primary rounded me-2" />
                      <h5 className="card-title mb-0">Buying</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-md mb-6 mb-md-2">
                      <div className="accordion mt-2" id="accordionExample2">
                        <div className="accordion-item rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingOne2">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionOne2"
                              aria-expanded="false"
                              aria-controls="accordionOne2"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionOne2"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              Lemon drops chocolate cake gummies carrot cake
                              chupa chups muffin topping. Sesame snaps icing
                              marzipan gummi bears macaroon dragée danish
                              caramels powder. Bear claw dragée pastry topping
                              soufflé. Wafer gummi bears marshmallow pastry pie.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingTwo2">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionTwo2"
                              aria-expanded="false"
                              aria-controls="accordionTwo2"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionTwo2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo2"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              Dessert ice cream donut oat cake jelly-o pie sugar
                              plum cheesecake. Bear claw dragée oat cake dragée
                              ice cream halvah tootsie roll. Danish cake oat
                              cake pie macaroon tart donut gummies. Jelly beans
                              candy canes carrot cake. Fruitcake chocolate chupa
                              chups.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingThree2">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionThree2"
                              aria-expanded="false"
                              aria-controls="accordionThree2"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionThree2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree2"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFour2">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFour2"
                              aria-expanded="false"
                              aria-controls="accordionFour2"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFour2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour2"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFive2">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFive2"
                              aria-expanded="false"
                              aria-controls="accordionFive2"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFive2"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive2"
                            data-bs-parent="#accordionExample2"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/autoprofito_frontend/faq">
                      <div className="text-primary">
                        See all 10 articles
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xxl-4 mb-4">
                {/* Added margin-bottom */}
                <div className="card h-100 shadow-none border-2">
                  <div className="card-header d-flex align-items-center justify-content-left">
                    <div className="d-flex align-items-left">
                      <i className="fa-solid fa-cart-shopping fs-2 text-primary rounded me-2" />
                      <h5 className="card-title mb-0">Buying</h5>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="col-md mb-6 mb-md-2">
                      <div className="accordion mt-2" id="accordionExample3">
                        <div className="accordion-item rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingOne3">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionOne3"
                              aria-expanded="false"
                              aria-controls="accordionOne3"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionOne3"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              Lemon drops chocolate cake gummies carrot cake
                              chupa chups muffin topping. Sesame snaps icing
                              marzipan gummi bears macaroon dragée danish
                              caramels powder. Bear claw dragée pastry topping
                              soufflé. Wafer gummi bears marshmallow pastry pie.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingTwo3">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionTwo3"
                              aria-expanded="false"
                              aria-controls="accordionTwo3"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionTwo3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo3"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              Dessert ice cream donut oat cake jelly-o pie sugar
                              plum cheesecake. Bear claw dragée oat cake dragée
                              ice cream halvah tootsie roll. Danish cake oat
                              cake pie macaroon tart donut gummies. Jelly beans
                              candy canes carrot cake. Fruitcake chocolate chupa
                              chups.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingThree3">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionThree3"
                              aria-expanded="false"
                              aria-controls="accordionThree3"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionThree3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree3"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFour3">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFour3"
                              aria-expanded="false"
                              aria-controls="accordionFour3"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFour3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour3"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item mt-3 rounded border border-secondary shadow-none">
                          <h2 className="accordion-header" id="headingFive3">
                            <button
                              type="button"
                              className="accordion-button collapsed rounded-top border-0"
                              data-bs-toggle="collapse"
                              data-bs-target="#accordionFive3"
                              aria-expanded="false"
                              aria-controls="accordionFive3"
                            >
                              What counts towards the 100 response limits?
                            </button>
                          </h2>
                          <div
                            id="accordionFive3"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFive3"
                            data-bs-parent="#accordionExample3"
                          >
                            <div className="accordion-body">
                              Oat cake toffee chocolate bar jujubes. Marshmallow
                              brownie lemon drops cheesecake. Bonbon gingerbread
                              marshmallow sweet jelly beans muffin. Sweet roll
                              bear claw candy canes oat cake dragée caramels.
                              Ice cream wafer danish cookie caramels muffin.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="/autoprofito_frontend/faq">
                      <div className="text-primary">
                        See all 10 articles
                        <i className="fa-solid fa-arrow-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="card p-4">
          <div className="card-body text-center">
            <h3 className="mb-2">Still have questions?</h3>
            <p className="m-1">Our specialists are always happy to help. </p>
            <p>
              Contact us during standard business hours or email us 24/7 and
              we'll get back to you.
            </p>
            <button className="btn btn-primary">Contact us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQs;
