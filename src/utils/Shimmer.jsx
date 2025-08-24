import React from "react";
import "../scss/Shimmer.scss";

const Shimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img"></div>

      <div className="shimmer-desc">
        <div className="shimmer-line title"></div>
        <div className="shimmer-line"></div>
        <div className="shimmer-line"></div>
      </div>
    </div>
  );
};

export default Shimmer;
