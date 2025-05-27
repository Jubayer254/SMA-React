import React from "react";
import { renderStars } from "../../Common/Stars";

const ReviewInfo = () => {
  return (
    <div
      className="p-3 shadow bg-primary d-inline-block rounded-4 shadow-lg text-center"
      tyle={{
        background: "url(assets/images/pattern/02.png) no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      {/* <!-- Info --> */}
      <h5 className="text-white mb-0">4.5/5.0</h5>
      {/* <!-- Rating --> */}
      {renderStars(4.5)}
      <p className="text-white mb-0">Based on 3265 ratings</p>
    </div>
  );
};

export default ReviewInfo;
