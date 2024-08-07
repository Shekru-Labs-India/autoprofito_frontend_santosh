import React from "react";
import { Link } from "react-router-dom";
import "../assets/vendor/css/pages/page-misc.css";

// Import images
import tree3Img from "../assets/img/illustrations/tree-3.png";
import treeImg from "../assets/img/illustrations/tree.png";
import miscMaskLightImg from "../assets/img/illustrations/misc-mask-light.png";
import notFoundImg from "../assets/img/illustrations/404.png";

const NotFoundPage = () => {
  return (
    <div className="misc-wrapper">
      <h1
        className="mb-2 mx-2"
        style={{ fontSize: "6rem", lineHeight: "6rem" }}
      >
        404
      </h1>
      <h4 className="mb-2">Page Not Found 🙄</h4>
      <p className="mb-10 mx-2">
        We couldn't find the page you are looking for
      </p>
      <div className="d-flex justify-content-center mt-5">
        <img
          src={tree3Img}
          alt="misc-tree"
          className="img-fluid misc-object d-none d-lg-inline-block"
        />
        <img
          src={treeImg}
          alt="misc-tree"
          className="img-fluid misc-object-right d-none d-lg-inline-block"
        />
        <img
          src={miscMaskLightImg}
          alt="misc-error"
          className="scaleX-n1-rtl misc-bg d-none d-lg-inline-block"
          height="172"
          data-app-light-img="illustrations/misc-mask-light.png"
          data-app-dark-img="illustrations/misc-mask-dark.png"
        />
        <div className="d-flex flex-column align-items-center">
          <img
            src={notFoundImg}
            alt="misc-error"
            className="misc-model img-fluid z-1"
            width="780"
          />
          <div>
            <Link to="/autoprofito_frontend_santosh" className="btn btn-primary text-center my-6">
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;