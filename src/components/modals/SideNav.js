import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ modalHandler }) => {
  return (
    <div>
      <div className="text-white font-semibold text-center p-3 bg-primary flex items-center justify-between">
        <span>Menu</span>

        <span
          className="modal-close cursor-pointer"
          onClick={() => {
            modalHandler();
          }}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </span>
      </div>
      <div>
        <Link to="/">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">
            Home
          </p>
        </Link>
        <Link to="/shop">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">
            Shop
          </p>
        </Link>
        <Link to="/account">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">
            My Account
          </p>
        </Link>
        <Link to="/about">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">
            About Us
          </p>
        </Link>
        <Link to="/contact">
          <p className="text-gray-700 hover:bg-gray-200 border-b border-dashed transition p-3">
            Contact Us
          </p>
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
