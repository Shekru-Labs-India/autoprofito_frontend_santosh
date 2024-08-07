import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import FAQs from './FAQs'
import mastercard from '../assets/img/icons/payments/mastercard.png'
import visa from '../assets/img/icons/payments/visa.png'

function Subscription() {
  return (
    <div>
      <Nav/>
      <div className="container m-5 text-center"  >
        <h1  style={{ color: '#8c57ff' }}>Subscription</h1>
      </div>
      <div className="container-xxl flex-grow-1 container-p-y">
  <div className="row">
    <div className="col-md-12">
      
      <div className="card mb-6">
        {/* Current Plan */}
        <h5 className="card-header">Current Plan</h5>
        <div className="card-body pt-1">
          <div className="row">
            <div className="col-md-6 mb-1">
              <div className="mb-6">
                <h6 className="mb-1">Your Current Plan is Basic</h6>
                <p>A simple start for everyone</p>
              </div>
              <div className="mb-6">
                <h6 className="mb-1">Active until Dec 09, 2021</h6>
                <p>
                  We will send you a notification upon Subscription expiration
                </p>
              </div>
              <div>
                <h6 className="mb-1">
                  <span className="me-1">$199 Per Month</span>{" "}
                  <span className="badge bg-label-primary rounded-pill">
                    Popular
                  </span>
                </h6>
                <p className="mb-1">
                  Standard plan for small to medium businesses
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="alert alert-warning mb-6 alert-dismissible"
                role="alert"
              >
                <h5 className="alert-heading mb-1 d-flex align-items-center">
                  <span className="alert-icon rounded">
                    <i className="ri-alert-line ri-22px" />
                  </span>
                  <span>We need your attention!</span>
                </h5>
                <span className="ms-11 ps-1">Your plan requires update</span>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="close"
                />
              </div>
              <div className="plan-statistics">
                <div className="d-flex justify-content-between">
                  <h6 className="mb-1">Days</h6>
                  <h6 className="mb-1">12 of 30 Days</h6>
                </div>
                <div className="progress rounded mb-1">
                  <div
                    className="progress-bar w-25 rounded"
                    role="progressbar"
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <small>18 days remaining until your plan requires update</small>
              </div>
            </div>
            <div className="col-12 d-flex gap-2 mt-6 flex-wrap">
              <button
                className="btn btn-primary me-2"
                data-bs-toggle="modal"
                data-bs-target="#pricingModal"
              >
                Upgrade Plan
              </button>
              <button className="btn btn-outline-danger cancel-subscription">
                Cancel Subscription
              </button>
            </div>
          </div>
        </div>
        {/* /Current Plan */}
      </div>
      <div className="card mb-6">
        <h5 className="card-header">Payment Methods</h5>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <form
                id="creditCardForm"
                className="row g-5"
                onsubmit="return false"
              >
                <div className="col-12 mb-1">
                  <div className="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      className="form-check-input"
                      type="radio"
                      defaultValue=""
                      id="collapsible-payment-cc"
                      defaultChecked=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="collapsible-payment-cc"
                    >
                      Credit/Debit/ATM Card
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      name="collapsible-payment"
                      className="form-check-input"
                      type="radio"
                      defaultValue=""
                      id="collapsible-payment-cash"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="collapsible-payment-cash"
                    >
                      Paypal account
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        id="paymentCard"
                        name="paymentCard"
                        className="form-control credit-card-mask"
                        type="text"
                        placeholder="1356 3215 6548 7898"
                        aria-describedby="paymentCard2"
                      />
                      <label htmlFor="paymentCard">Card Number</label>
                    </div>
                    <span
                      className="input-group-text cursor-pointer"
                      id="paymentCard2"
                    >
                      <span className="card-type" />
                    </span>
                  </div>
                </div>
                <div className="col-12 col-xl-6 col-lg-12">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="paymentName"
                      className="form-control"
                      placeholder="John Doe"
                    />
                    <label htmlFor="paymentName">Name</label>
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-6">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="text"
                      id="paymentExpiryDate"
                      className="form-control expiry-date-mask"
                      placeholder="MM/YY"
                    />
                    <label htmlFor="paymentExpiryDate">Exp. Date</label>
                  </div>
                </div>
                <div className="col-6 col-xl-3 col-lg-6">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="text"
                        id="paymentCvv"
                        className="form-control cvv-code-mask"
                        maxLength={3}
                        placeholder={654}
                      />
                      <label htmlFor="paymentCvv">CVV Code</label>
                    </div>
                    <span
                      className="input-group-text cursor-pointer"
                      id="paymentCvv2"
                    >
                      <i
                        className="ri-question-line"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        title="Card Verification Value"
                      />
                    </span>
                  </div>
                </div>
                <div className="col-12 mt-6">
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="future-billing"
                    />
                    <label htmlFor="future-billing">
                      Save card for future billing?
                    </label>
                  </div>
                </div>
                <div className="col-12 mt-6">
                  <button
                    type="submit"
                    className="btn btn-primary me-sm-3 me-1"
                  >
                    Save Changes
                  </button>
                  <button type="reset" className="btn btn-outline-secondary">
                    Reset
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h6 className="mb-4">My Cards</h6>
              <div className="added-cards">
                <div className="cardMaster bg-lightest p-4 rounded mb-6">
                  <div className="d-flex justify-content-between flex-sm-row flex-column">
                    <div className="card-information me-2">
                      <img
                        className="mb-2 img-fluid"
                        src={mastercard}
                        alt="Master Card"
                      />
                      <div className="d-flex align-items-center mb-2 flex-wrap gap-2">
                        <h6 className="mb-0 me-2">Tom McBride</h6>
                        <span className="badge bg-label-primary rounded-pill">
                          Primary
                        </span>
                      </div>
                      <span className="card-number">∗∗∗∗ ∗∗∗∗ 9856</span>
                    </div>
                    <div className="d-flex flex-column text-start text-lg-end">
                      <div className="d-flex order-sm-0 order-1 mt-sm-0 mt-4">
                        <button
                          className="btn btn-sm btn-outline-primary me-4"
                          data-bs-toggle="modal"
                          data-bs-target="#editCCModal"
                        >
                          Edit
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          Delete
                        </button>
                      </div>
                      <small className="mt-4 order-sm-1 order-0">
                        Card expires at 12/26
                      </small>
                    </div>
                  </div>
                </div>
                <div className="cardMaster bg-lightest p-4 rounded">
                  <div className="d-flex justify-content-between flex-sm-row flex-column">
                    <div className="card-information me-4">
                      <img
                        className="mb-2 img-fluid"
                        src={visa}
                        alt="Visa Card"
                      />
                      <h6 className="mb-2">Mildred Wagner</h6>
                      <span className="card-number">∗∗∗∗ ∗∗∗∗ 5896</span>
                    </div>
                    <div className="d-flex flex-column text-start text-lg-end">
                      <div className="d-flex order-sm-0 order-1 mt-sm-0 mt-4">
                        <button
                          className="btn btn-sm btn-outline-primary me-4"
                          data-bs-toggle="modal"
                          data-bs-target="#editCCModal"
                        >
                          Edit
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          Delete
                        </button>
                      </div>
                      <small className="mt-4 order-sm-1 order-0">
                        Card expires at 02/24
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              {/* Add New Credit Card Modal */}
              <div
                className="modal fade"
                id="editCCModal"
                tabIndex={-1}
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-simple modal-add-new-cc">
                  <div className="modal-content">
                    <div className="modal-body p-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      />
                      <div className="text-center mb-6">
                        <h3 className="mb-2 pb-1">Edit Card</h3>
                        <p>Edit your saved card details</p>
                      </div>
                      <form
                        id="editCCForm"
                        className="row g-5"
                        onsubmit="return false"
                      >
                        <div className="col-12">
                          <div className="input-group input-group-merge">
                            <div className="form-floating form-floating-outline">
                              <input
                                id="modalEditCard"
                                name="modalEditCard"
                                className="form-control credit-card-mask-edit"
                                type="text"
                                placeholder="4356 3215 6548 7898"
                                defaultValue="4356 3215 6548 7898"
                                aria-describedby="modalEditCard2"
                              />
                              <label htmlFor="modalEditCard">Card Number</label>
                            </div>
                            <span
                              className="input-group-text cursor-pointer"
                              id="modalEditCard2"
                            >
                              <span className="card-type-edit" />
                            </span>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="modalEditName"
                              className="form-control"
                              placeholder="John Doe"
                              defaultValue="John Doe"
                            />
                            <label htmlFor="modalEditName">Name</label>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div className="form-floating form-floating-outline">
                            <input
                              type="text"
                              id="modalEditExpiryDate"
                              className="form-control expiry-date-mask-edit"
                              placeholder="MM/YY"
                              defaultValue="08/28"
                            />
                            <label htmlFor="modalEditExpiryDate">
                              Exp. Date
                            </label>
                          </div>
                        </div>
                        <div className="col-6 col-md-3">
                          <div className="input-group input-group-merge">
                            <div className="form-floating form-floating-outline">
                              <input
                                type="text"
                                id="modalEditCvv"
                                className="form-control cvv-code-mask-edit"
                                maxLength={3}
                                placeholder={654}
                                defaultValue="XXX"
                              />
                              <label htmlFor="modalEditCvv">CVV Code</label>
                            </div>
                            <span
                              className="input-group-text cursor-pointer"
                              id="modalEditCvv2"
                            >
                              <i
                                className="ri-question-line"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Card Verification Value"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-check form-switch">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="editPrimaryCard"
                            />
                            <label
                              htmlFor="editPrimaryCard"
                              className="text-heading"
                            >
                              Set as primary card
                            </label>
                          </div>
                        </div>
                        <div className="col-12 text-center">
                          <button
                            type="submit"
                            className="btn btn-primary me-3"
                          >
                            Submit
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          >
                            Cancel
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Add New Credit Card Modal */}
              {/*/ Modal */}
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-6">
        {/* Billing Address */}
        <h5 className="card-header">Billing Address</h5>
        <div className="card-body">
          <form id="formAccountSettings" onsubmit="return false">
            <div className="row gx-5">
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-control"
                    placeholder="ThemeSelection"
                  />
                  <label htmlFor="companyName">Company Name</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="billingEmail"
                    name="billingEmail"
                    placeholder="john.doe@example.com"
                  />
                  <label htmlFor="billingEmail">Billing Email</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    id="taxId"
                    name="taxId"
                    className="form-control"
                    placeholder="Enter Tax ID"
                  />
                  <label htmlFor="taxId">Tax ID</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="vatNumber"
                    name="vatNumber"
                    placeholder="Enter VAT Number"
                  />
                  <label htmlFor="vatNumber">VAT Number</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline">
                    <input
                      className="form-control mobile-number"
                      type="text"
                      id="mobileNumber"
                      name="mobileNumber"
                      placeholder="202 555 0111"
                    />
                    <label htmlFor="mobileNumber">Mobile</label>
                  </div>
                  <span className="input-group-text">US (+1)</span>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <select
                    id="country"
                    className="form-select select2"
                    name="country"
                  >
                    <option selected="">USA</option>
                    <option>Canada</option>
                    <option>UK</option>
                    <option>Germany</option>
                    <option>France</option>
                  </select>
                  <label htmlFor="country">Country</label>
                </div>
              </div>
              <div className="col-12 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control"
                    id="billingAddress"
                    name="billingAddress"
                    placeholder="Billing Address"
                  />
                  <label htmlFor="billingAddress">Billing Address</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    className="form-control"
                    type="text"
                    id="state"
                    name="state"
                    placeholder="California"
                  />
                  <label htmlFor="state">State</label>
                </div>
              </div>
              <div className="col-sm-6 mb-5">
                <div className="form-floating form-floating-outline">
                  <input
                    type="text"
                    className="form-control zip-code"
                    id="zipCode"
                    name="zipCode"
                    placeholder={231465}
                    maxLength={6}
                  />
                  <label htmlFor="zipCode">Zip Code</label>
                </div>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary me-3">
                Save changes
              </button>
              <button type="reset" className="btn btn-outline-secondary">
                Reset
              </button>
            </div>
          </form>
        </div>
        {/* /Billing Address */}
      </div>
      <div className="card">
        {/* Billing History */}
        <h5 className="card-header px-6 text-center text-md-start pb-md-5 pb-0">
          Billing History
        </h5>
        <div className="card-datatable table-responsive">
          <table className="invoice-list-table table">
            <thead>
              <tr>
                <th />
                <th />
                <th>#</th>
                <th>total</th>
                <th>Client</th>
                <th>Total</th>
                <th className="text-truncate">Issued Date</th>
                <th>Balance</th>
                <th>Invoice Status</th>
                <th className="cell-fit">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
        {/*/ Billing History */}
      </div>
    </div>
  </div>
  {/* Modal */}
  {/* Pricing Modal */}
  <div
    className="modal fade"
    id="pricingModal"
    tabIndex={-1}
    aria-hidden="true"
  >
    <div className="modal-dialog modal-xl modal-simple modal-pricing">
      <div className="modal-content">
        <div className="modal-body p-0">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
          {/* Pricing Plans */}
          <div className="pb-6 rounded-top">
            <h4 className="text-center mb-2">Pricing Plans</h4>
            <p className="text-center mb-0">
              All plans include 40+ advanced tools and features to boost your
              product. Choose the best plan to fit your needs.
            </p>
            <div className="d-flex align-items-center justify-content-center flex-wrap gap-2 pt-12 pb-4">
              <label className="switch switch-sm ms-sm-12 ps-sm-12 me-0">
                <span className="switch-label">Monthly</span>
                <input
                  type="checkbox"
                  className="switch-input price-duration-toggler"
                  defaultChecked=""
                />
                <span className="switch-toggle-slider">
                  <span className="switch-on" />
                  <span className="switch-off" />
                </span>
                <span className="switch-label">Annually</span>
              </label>
              <div className="mt-n5 ms-n10 ml-2 mb-10 d-none d-sm-flex align-items-center gap-2">
                <i className="ri-corner-left-down-fill ri-24px text-muted scaleX-n1-rtl" />
                <span className="badge badge-sm bg-label-primary rounded-pill mb-2 ">
                  Save up to 10%
                </span>
              </div>
            </div>
            <div className="row gy-3">
              {/* Basic */}
              <div className="col-xl mb-md-0 mb-6">
                <div className="card border rounded shadow-none">
                  <div className="card-body pt-12">
                    <div className="mt-3 mb-5 text-center">
                      <img
                        src="../../assets/img/illustrations/pricing-basic.png"
                        alt="Basic Image"
                        height={100}
                      />
                    </div>
                    <h4 className="card-title text-center text-capitalize mb-1">
                      Basic
                    </h4>
                    <p className="text-center mb-5">
                      A simple start for everyone
                    </p>
                    <div className="text-center h-px-50">
                      <div className="d-flex justify-content-center">
                        <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1 fw-normal">
                          $
                        </sup>
                        <h1 className="mb-0 text-primary">0</h1>
                        <sub className="h6 text-body pricing-duration mt-auto mb-1">
                          /month
                        </sub>
                      </div>
                    </div>
                    <ul className="list-group ps-6 my-5 pt-5">
                      <li className="mb-2">100 responses a month</li>
                      <li className="mb-2">Unlimited forms and surveys</li>
                      <li className="mb-2">Unlimited fields</li>
                      <li className="mb-2">Basic form creation tools</li>
                      <li className="mb-0">Up to 2 subdomains</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-success d-grid w-100"
                      data-bs-dismiss="modal"
                    >
                      Your Current Plan
                    </button>
                  </div>
                </div>
              </div>
              {/* Standard */}
              <div className="col-xl mb-md-0 mb-6">
                <div className="card border-primary border shadow-none">
                  <div className="card-body position-relative pt-4">
                    <div className="position-absolute end-0 me-6 top-0 mt-6">
                      <span className="badge bg-label-primary rounded-pill">
                        Popular
                      </span>
                    </div>
                    <div className="my-5 pt-6 text-center">
                      <img
                        src="../../assets/img/illustrations/pricing-standard.png"
                        alt="Standard Image"
                        height={100}
                      />
                    </div>
                    <h4 className="card-title text-center text-capitalize mb-1">
                      Standard
                    </h4>
                    <p className="text-center mb-5">
                      For small to medium businesses
                    </p>
                    <div className="text-center h-px-50">
                      <div className="d-flex justify-content-center">
                        <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1">
                          $
                        </sup>
                        <h1 className="price-toggle price-yearly text-primary mb-0">
                          7
                        </h1>
                        <h1 className="price-toggle price-monthly text-primary mb-0 d-none">
                          9
                        </h1>
                        <sub className="h6 text-body pricing-duration mt-auto mb-1">
                          /month
                        </sub>
                      </div>
                      <small className="price-yearly price-yearly-toggle text-muted">
                        $ 480 / year
                      </small>
                    </div>
                    <ul className="list-group ps-6 my-5 pt-5">
                      <li className="mb-2">Unlimited responses</li>
                      <li className="mb-2">Unlimited forms and surveys</li>
                      <li className="mb-2">Instagram profile page</li>
                      <li className="mb-2">Google Docs integration</li>
                      <li className="mb-0">Custom “Thank you” page</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-primary d-grid w-100"
                      data-bs-dismiss="modal"
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
              {/* Enterprise */}
              <div className="col-xl">
                <div className="card border rounded shadow-none">
                  <div className="card-body pt-12">
                    <div className="mt-3 mb-5 text-center">
                      <img
                        src="../../assets/img/illustrations/pricing-enterprise.png"
                        alt="Enterprise Image"
                        height={100}
                      />
                    </div>
                    <h4 className="card-title text-center text-capitalize mb-1">
                      Enterprise
                    </h4>
                    <p className="text-center mb-5">
                      Solution for big organizations
                    </p>
                    <div className="text-center h-px-50">
                      <div className="d-flex justify-content-center">
                        <sup className="h6 text-body pricing-currency mt-2 mb-0 me-1">
                          $
                        </sup>
                        <h1 className="price-toggle price-yearly text-primary mb-0">
                          16
                        </h1>
                        <h1 className="price-toggle price-monthly text-primary mb-0 d-none">
                          19
                        </h1>
                        <sub className="h6 text-body pricing-duration mt-auto mb-1">
                          /month
                        </sub>
                      </div>
                      <small className="price-yearly price-yearly-toggle text-muted">
                        $ 960 / year
                      </small>
                    </div>
                    <ul className="list-group ps-6 my-5 pt-5">
                      <li className="mb-2">PayPal payments</li>
                      <li className="mb-2">Logic Jumps</li>
                      <li className="mb-2">File upload with 5GB storage</li>
                      <li className="mb-2">Custom domain support</li>
                      <li className="mb-0">Stripe integration</li>
                    </ul>
                    <button
                      type="button"
                      className="btn btn-outline-primary d-grid w-100"
                      data-bs-dismiss="modal"
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/ Pricing Plans */}
          <div className="text-center">
            <p>Still Not Convinced? Start with a 14-day FREE trial!</p>
            <a href="javascript:void(0);" className="btn btn-primary">
              Start your trial
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*/ Pricing Modal */}
  {/*/ Modal */}
</div>

      <FAQs/>
      <Footer/>
      
    </div>
  )
}

export default Subscription
