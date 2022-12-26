import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = (props) => {
  const { page, secondary } = props;
  return (
    <div className="p-4 flex items-center gap-3">
      <Link to="/" className="text-primary text-base">
        <i className="fas fa-home"></i>
      </Link>

      <span className={`text-xs ${secondary ? " text-white" : "text-primary"}`}>
        <i className="fas fa-chevron-right"></i>
      </span>

      <p
        className={`font-medium ${secondary ? " text-white" : "text-primary"}`}
      >
        {page}
      </p>
    </div>
  );
};

export default Breadcrumbs;
