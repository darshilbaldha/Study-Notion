import React from "react";

const ReachComponent = ({ logo, title, title1, desc }) => {
  return (
    <div>
      <div className="flex gap-3 items-center">
        <div className="text-2xl text-richblack-300">{logo}</div>
        <p className="text-richblack-5 text-xl font-semibold">{title}</p>
      </div>
      <div className="font-medium">{title1}</div>
      <div>{desc}</div>
    </div>
  );
};

export default ReachComponent;
