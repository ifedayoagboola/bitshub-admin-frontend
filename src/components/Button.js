import React from "react";

const Button = (props) => {
  const { type, onClick, children, className, primary, secondary, disabled, loading } = props;
  return (
    <div>
      <button
        type={type || "button"}
        onClick={disabled || loading ? null : onClick}
        className={` rounded flex justify-center items-center gap-2 cursor-pointer ${className} ${
          primary
            ? "bg-primary border border-primary text-white hover:bg-transparent hover:text-primary transition"
            : secondary
            ? "border border-gray-300 hover:border-primary text-gray-600 hover:text-primary transition"
            : "bg-primary border border-primary hover:bg-transparent transition"
        } ${
          disabled
            ? "cursor-not-allowed bg-gray-300 border-0 hover:bg-gray-300 text-white hover:text-white"
            : loading
            ? "cursor-wait bg-gray-300 border-0 hover:bg-gray-300 hover:text-white"
            : ""
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
