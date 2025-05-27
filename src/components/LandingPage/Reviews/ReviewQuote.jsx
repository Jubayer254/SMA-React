import React from "react";
import { renderStars } from "../../Common/Stars";

const ReviewQuote = ({ divClasses, avaterImg, name, rating, children }) => {
  return (
    <div className={divClasses}>
      {/* <!-- Avatar --> */}
      <div className="avatar avatar-xl mb-3">
        <img
          className="avatar-img rounded-circle"
          src={avaterImg}
          alt="avatar"
        />
      </div>
      {/* <!-- Content --> */}
      <blockquote>
        <p>
          <span className="me-1 small">
            <i className="fas fa-quote-left"></i>
          </span>
          {children}
          <span className="ms-1 small">
            <i className="fas fa-quote-right"></i>
          </span>
        </p>
      </blockquote>
      {/* <!-- Rating --> */}
      { renderStars(rating)}
      {/* <!-- Info --> */}
      <h6 className="mb-0">{name}</h6>
    </div>
  );
};

export default ReviewQuote;
