import React from "react";
import ReviewsDotSVG from "../../SVGs/ReviewsDotSVG";
import ReviewCircleSVG from "../../SVGs/ReviewCircleSVG";
import ReviewQuote from "./ReviewQuote";
import MentorLIst from "./MentorLIst";
import ReviewInfo from "./ReviewInfo";

const mentors = [
  {
    avatar: "assets/images/avatar/09.jpg",
    name: "Lori Stevens",
    subject: "Tutor of physic",
  },
  {
    avatar: "assets/images/avatar/04.jpg",
    name: "Billy Vasquez",
    subject: "Tutor of chemistry",
  },
  {
    avatar: "assets/images/avatar/02.jpg",
    name: "Larry Lawson",
    subject: "Tutor of technology",
  },
];


const ReviewRight = ({}) => {
  return (
    <div className="col-xl-7 order-2 order-xl-1">
      <div className="row mt-0 mt-xl-5">
        {/* <!-- Review --> */}
        <div className="col-md-7 position-relative mb-0 mt-0 mt-md-5">
          {/* <!-- SVG --> */}
          <ReviewCircleSVG></ReviewCircleSVG>

          <ReviewQuote
            divClasses="bg-body shadow text-center p-4 rounded-3 position-relative mb-5 mb-md-0"
            avaterImg="assets/images/avatar/01.jpg"
            name="Carolyn Ortiz"
            rating="4.5"
          >
            Moonlight newspaper up its enjoyment agreeable depending. Timed
            voice share led him to widen noisy young. At weddings believed
            laughing
          </ReviewQuote>
        </div>

        {/* <!-- Mentor list --> */}
        <MentorLIst mentors={mentors}></MentorLIst>
      </div>
      {/* <!-- Row END --> */}

      <div className="row mt-5 mt-xl-0">
        {/* <!-- Rating --> */}
        <div className="col-7 mt-0 mt-xl-5 text-end position-relative z-index-1 d-none d-md-block">
          {/* <!-- SVG --> */}
          <ReviewsDotSVG></ReviewsDotSVG>
          <ReviewInfo></ReviewInfo>
        </div>

        {/* <!-- Review --> */}
        <div className="col-md-5 mt-n6 mb-0 mb-md-5">
          <ReviewQuote
            divClasses="bg-body shadow text-center p-4 rounded-3"
            avaterImg="assets/images/avatar/03.jpg"
            name="Dennis Barrett"
            rating="4.5"
          >
            At weddings believed laughing although the Moonlight newspaper up
            its enjoyment agreeable depending.
          </ReviewQuote>
        </div>
      </div>
      {/* <!-- Row END --> */}
    </div>
  );
};

export default ReviewRight;
