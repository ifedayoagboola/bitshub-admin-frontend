import React from "react";
import { Link } from "react-router-dom";

const ProfileModal = (props) => {
  return (
    <div className="shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
      <div className="modal-close cursor-pointer z-50 ml-auto" onClick={props.modalHandler}>
        <svg
          className="fill-current text-black"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
        </svg>
      </div>
      <div className="p-4 space-y-1 pl-8">
        <Link to="/account" className="relative hover:text-primary block font-medium transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="far fa-address-card"></i>
          </span>
          Manage Account
        </Link>
        <Link to="/account/profile-info" className="relative hover:text-primary block transition">
          Profile Information
        </Link>
        <Link to="/account/manage-address" className="relative hover:text-primary block transition">
          Manage Address
        </Link>
        <Link to="/account/change-password" className="relative hover:text-primary block transition">
          Change Password
        </Link>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <Link to="/account/order-history" className="relative hover:text-primary block font-medium transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="far fa-address-card"></i>
          </span>
          My Order History
        </Link>
        <Link to="/account/returns" className="relative hover:text-primary block transition">
          My returns
        </Link>
        <Link to="/account/cancellations" className="relative hover:text-primary block transition">
          My Cancellations
        </Link>
        <Link to="/account/reviews" className="relative hover:text-primary block transition">
          My Reviews
        </Link>
      </div>

      <div className="space-y-1 pl-8 pt-4">
        <Link to="/account/payment-methods" className="relative hover:text-primary block font-medium transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="far fa-address-card"></i>
          </span>
          Payment Methods
        </Link>
        <Link to="/account/voucher" className="relative hover:text-primary block transition">
          Voucher
        </Link>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <Link to="/account/wishlist" className="relative hover:text-primary block font-medium transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="far fa-address-card"></i>
          </span>
          My Wishlist
        </Link>
      </div>
      <div className="space-y-1 pl-8 pt-4">
        <Link to="/login" className="relative hover:text-primary block font-medium transition">
          <span className="absolute -left-8 top-0 text-base">
            <i className="far fa-address-card"></i>
          </span>
          Logout
        </Link>
      </div>
    </div>
  );
};

export default ProfileModal;
