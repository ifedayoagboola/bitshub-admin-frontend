import React from "react";

const SearchModal = ({ modalHandler }) => {
  return (
    <div className="mx-8">
      <div className="text-gray-600 py-8 flex">
        <span className="uppercase text-xs">What are you looking for?</span>
        <span
          className="modal-close cursor-pointer ml-[60%]"
          onClick={() => {
            modalHandler();
          }}
        >
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </span>
      </div>
      <div className="w-full relative">
        <input
          type="text"
          name=""
          id=""
          className="w-full border-0 border-b border-gray-400 border-r-0 py-3 focus:outline-none focus:ring-transparent focus:border-primary"
          placeholder="search products..."
        />
        <span className="absolute right-4 top-3 text-lg text-gray-400">
          <i className="fas fa-search"></i>
        </span>
      </div>
    </div>
  );
};

export default SearchModal;
