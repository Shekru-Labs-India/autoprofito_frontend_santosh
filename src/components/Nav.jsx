import React from "react";
import { Link } from 'react-router-dom';

function Nav() {

  const spanStyle = {
    color: '#9055FD',
  };

  return (
    <>
    <nav className="layout-navbar container-fluid shadow-none py-0" style={{ backgroundColor: '#FFFFFF' }}>
  <div className="navbar navbar-expand-lg landing-navbar border-top-0 px-4 px-md-8">
    <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-6">
      <button
        className="navbar-toggler border-0 px-0 me-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="tf-icons ri-menu-fill ri-24px align-middle"></i>
      </button>

      <a href="/" className="app-brand-link">
        <span className="app-brand-logo demo">
          <span style={spanStyle}>
            <img src={process.env.PUBLIC_URL + '/favicon.png'} alt="Favicon" width="30px" />
          </span>
        </span>
        <span className="app-brand-text demo menu-text fw-semibold ms-2 ps-1">
          AutoProfito
        </span>
      </a>
    </div>

    <div
      className="collapse navbar-collapse landing-nav-menu"
      id="navbarSupportedContent"
    >
      <button
        className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="tf-icons ri-close-fill"></i>
      </button>
      <ul className="navbar-nav me-auto p-10 p-lg-0">
        <li className="nav-item">
          <a
            className="nav-link fw-medium"
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <Link to="/autoprofito_frontend/subscription" className="footer-link nav-link fw-medium">Pricing</Link>
        </li>
        <li className="nav-item">
          <a
            className="nav-link fw-medium"
            href="#"
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <Link to="/" className="footer-link nav-link fw-medium">About</Link>
        </li>
      </ul>
    </div>
    <div className="landing-menu-overlay d-lg-none"></div>

    <ul className="navbar-nav flex-row align-items-center ms-auto">
      <li>
        <a
          href="../vertical-menu-template/auth-login-cover.html"
          className="btn rounded-pill btn-label-primary waves-effect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tf-icons ri-user-line me-md-1"></span>
          <span className="d-none d-md-block">Login</span>
        </a>
      </li>

      <li className="px-2">
        <a
          href="../vertical-menu-template/auth-login-cover.html"
          className="btn rounded-pill btn-label-secondary waves-effect"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="tf-icons ri-user-line me-md-1"></span>
          <span className="d-none d-md-block">Register</span>
        </a>
      </li>
      <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
        <a
          className="nav-link btn btn-text-secondary rounded-pill btn-icon dropdown-toggle hide-arrow me-sm-4 waves-effect waves-light"
          href="#"
          data-bs-toggle="dropdown"
        >
          <i className="ri-24px text-heading ri-sun-line"></i>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
          <li>
            <a
              className="dropdown-item waves-effect active"
              href="#"
              data-theme="light"
            >
              <span className="align-middle">
                <i className="ri-sun-line ri-24px me-3"></i>Light
              </span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item waves-effect"
              href="#"
              data-theme="dark"
            >
              <span className="align-middle">
                <i className="ri-moon-clear-line ri-24px me-3"></i>Dark
              </span>
            </a>
          </li>
          <li>
            <a
              className="dropdown-item waves-effect"
              href="#"
              data-theme="system"
            >
              <span className="align-middle">
                <i className="ri-computer-line ri-24px me-3"></i>System
              </span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
      <hr style={{ borderTop: '1px solid #000', marginTop: 0, marginBottom : 0 }} />
    </>
  );
}

export default Nav;

