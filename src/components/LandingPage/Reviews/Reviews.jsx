import React from "react";
import ReviewsDotSVG from "../../SVGs/ReviewsDotSVG";
import ReviewCircleSVG from "../../SVGs/ReviewCircleSVG";
import ReviewQuote from "./ReviewQuote";
import MentorLIst from "./MentorLIst";
import ReviewInfo from "./ReviewInfo";
import ReviewRight from "./ReviewRight";
import ReviweLeft from "./ReviweLeft";

const Reviews = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row g-4 g-lg-5 align-items-center">
          <ReviewRight></ReviewRight>
          <ReviweLeft></ReviweLeft>
        </div>
        {/* <!-- Row END --> */}
      </div>
    </section>
  );
};

export default Reviews;
