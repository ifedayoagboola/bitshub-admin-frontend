import React from "react";

const DeleteProductModal = (props) => {
  const { action, modalHandler } = props;
  return (
    <div className="modal-content py-4 text-left px-6">
      <div className="flex justify-between items-center pb-3">
        <p className="text-2xl font-bold text-red-600">Caution!</p>
        <div className="modal-close cursor-pointer z-50" onClick={modalHandler}>
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
      </div>
      <div className="py-4">
        <p className="text-sm">
          By clicking 'YES', product will be permanently deleted!
        </p>
        <p className="text-base">Are you sure you want to delete product(s)?</p>
      </div>

      <div className="flex justify-evenly pt-2">
        <button
          onClick={modalHandler}
          className="px-4 bg-transparent p-3 border rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary hover:border-primary mr-2 text-sm"
        >
          No
        </button>

        <button
          onClick={action}
          className="modal-close px-4 bg-primary p-3 rounded-lg text-white hover:bg-transparent hover:text-primary hover:border-primary border text-sm"
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default DeleteProductModal;
