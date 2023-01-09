import React from "react";

const LoadingBox = () => {
  return (
    <div className="flex items-center justify-center text-2xl">
      <i className="fa fa-spinner fa-spin"></i>
      Loading...
    </div>
  );
};

export default LoadingBox;
