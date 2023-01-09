import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemRemove } from "../../actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MessageBox from "./MessageBox";
import Button from "../Button";

const CartModal = ({ modalHandler }) => {
  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const customId = "custom-id-yes";
  const removeFromCartHandler = (id) => {
    dispatch(itemRemove(id));
    toast.success("Successfully removed from cart", {
      toastId: customId,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-between text-white font-semibold text-center p-3 bg-primary transition">
        <div></div>
        <span className="font-medium">Cart</span>
        <span
          className="cursor-pointer"
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
      <div className="p-3 space-y-2">
        <p className="text-gray-700 font-medium border-b border-solid transition pt-4 pb-2">
          Total {cartItems.length} Item(s)
        </p>
        {cartItems.length === 0 ? (
          <MessageBox>
            No item in cart currently. <Link to="/shop">Go shopping</Link>
          </MessageBox>
        ) : (
          cartItems.map((item) => {
            const { product, name, qty, price } = item;
            return (
              <div className="flex items-center justify-between py-2" key={product}>
                <div className="flex items-center gap-4">
                  <div className="w-20">
                    <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/product-details/${product}`);
                      modalHandler();
                    }}
                  >
                    <p className="text-gray-700 font-semibold text-base hover:text-primary">{name}</p>
                    <span className="text-gray-700 text-sm pr-2">x{qty}</span>
                    <span className="text-gray-700 text-sm">₦{price * qty}</span>
                  </div>
                </div>
                <div
                  className="text-gray-600 cursor-pointer hover:text-primary mr-4"
                  onClick={() => {
                    removeFromCartHandler(product);
                  }}
                >
                  <i className="fas fa-trash"></i>
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center gap-4">
        <Button
          className="uppercase p-2 my-4"
          primary
          onClick={() => {
            navigate("/cart/:id");
            modalHandler();
          }}
        >
          View Cart
        </Button>

        <Button
          className="uppercase p-2 my-4 text-primary"
          secondary
          onClick={() => {
            navigate("/login?redirect=/shipping");
            modalHandler();
          }}
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default CartModal;
