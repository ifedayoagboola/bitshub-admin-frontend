import React from "react";

const LoadingBox = () => {
  return (
    <div className="flex items-center justify-center text-2xl h-[100vh]">
      <i className="fa fa-spinner fa spin pr-4"></i> Loading...
    </div>
  );
};

export default LoadingBox;
