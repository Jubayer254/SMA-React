import React from "react";

const FooterBottom = () => {
  return (
    <div className="py-3">
      <div className="container px-0">
        <div className="row text-center text-md-start align-items-center">
          {/* Copyright text */}
          <div className="col-12 col-md-6 mb-2 mb-md-0 text-primary-hover">
            Copyright{" "}
            <a href="#" className="text-body">
              ©2025 SPARK
            </a>
            . All rights reserved.
          </div>

          {/* Developed by Bitnova */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-inline-flex align-items-center justify-content-center">
              <span className="me-2">Developed by</span>
              <img
                src="assets/images/logo/BitNova.png"
                alt="Bitnova Logo"
                style={{ height: "15px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
