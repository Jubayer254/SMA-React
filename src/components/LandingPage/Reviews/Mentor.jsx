import React from "react";

const Mentor = ({ mentor }) => {
  return (
    <div className="d-flex align-items-center mb-3">
      {/* <!-- Avatar --> */}
      <div className="avatar avatar-sm">
        <img className="avatar-img rounded-1" src={mentor.avatar} alt="avatar" />
      </div>
      {/* <!-- Info --> */}
      <div className="ms-2">
        <h6 className="mb-0">{mentor.name}</h6>
        <p className="mb-0 small">{mentor.subject}c</p>
      </div>
    </div>
  );
};

export default Mentor;
