import React from "react";
import Mentor from "./Mentor";

const MentorLIst = ({ mentors }) => {
  return (
    <div className="col-md-5 mt-5 mt-md-0 d-none d-md-block">
      <div className="bg-body shadow p-4 rounded-3 d-inline-block position-relative">
        {/* <!-- Icon --> */}
        <div className="icon-lg bg-warning rounded-circle position-absolute top-0 start-100 translate-middle">
          <i className="bi bi-shield-fill-check text-dark"></i>
        </div>
        {/* <!-- Title --> */}
        <h6 className="mb-3">100+ Verified Mentors</h6>
        {mentors.map((mentor, index) => (
          <Mentor mentor={mentor}></Mentor>
        ))}
      </div>
    </div>
  );
};

export default MentorLIst;
