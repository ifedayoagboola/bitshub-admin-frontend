import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productDetails } from "../../redux/slices/productSlice";
import LoadingBox from "../../components/LoadingBox";
import MessageBox from "../../components/MessageBox";
import Rating from "../../components/Rating";
import Breadcrumbs from "../../components/Breadcrumbs";
import avatar from "../../assets/avatar.jpeg";
import TeamCard from "../../components/TeamCard";
import CenterModal from "../../components/modals/CenterModal";

const SingleProduct = () => {
  const [showDetails, setShowDetails] = useState(true);
  const [showReviews, setShowReviews] = useState(false);
  const { productId } = useParams();
  const dispatch = useDispatch();

  const details = useSelector((state) => state?.singleProduct);
  const { loading, error, product } = details;
  const handleShowDetails = () => {
    setShowDetails(true);
    setShowReviews(false);
  };
  const handleShowReviews = () => {
    setShowReviews(true);
    setShowDetails(false);
  };

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [dispatch, productId]);
  return (
    <div>
      {loading ? (
        <CenterModal className="bg-transparent text-white">
          <LoadingBox />
        </CenterModal>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="p-4">
          <Breadcrumbs page="Product view" />
          <div className="flex flex-col lg:flex-row gap-3">
            <div className="w-[100%] h-[300px] lg:w-[35%]">
              <img
                src={product?.product?.image}
                alt={product?.product?.name}
                className="border rounded-md w-full h-full"
              />
              <div className="grid grid-cols-5 gap-4 mt-4">
                <img
                  src={product?.product?.image}
                  alt={product?.product?.name}
                  className="w-full h-full cursor-pointer border hover:border-primary border rounded-md"
                />
                <img
                  src={product?.product?.image}
                  alt=""
                  className="w-full cursor-pointer border hover:border-primary border rounded-md"
                />
                <img
                  src={product?.product?.image}
                  alt=""
                  className="w-full cursor-pointer border hover:border-primary border rounded-md"
                />
                <img
                  src={product?.product?.image}
                  alt=""
                  className="w-full cursor-pointer border hover:border-primary border rounded-md"
                />
                <img
                  src={product?.product?.image}
                  alt=""
                  className="w-full cursor-pointer border hover:border-primary border rounded-md"
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[65%]">
              <div className="flex flex-col md:flex-row">
                <div className="w-[100%] md:w-[60%] px-2">
                  <h3 className="text-xl font-medium uppercase mb-2">
                    {product?.product?.name}
                  </h3>
                  <div className="my-2">
                    <Rating
                      rating={product?.product?.rating}
                      reviews={product?.product?.reviews}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-800 font-semi-bold space-x-2">
                      <span>Availability:</span>
                      <span
                        className={
                          product?.product?.quantityInStock > 0
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {product?.product?.quantityInStock > 0
                          ? "In stock"
                          : "out of stock"}
                      </span>
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">
                        Brand:
                      </span>
                      <span className="text-gray-600">
                        {product?.product?.brand}
                      </span>
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">
                        Category:
                      </span>
                      <span className="text-gray-600">
                        {product?.product?.category}
                      </span>
                    </p>
                    <p className="space-x-2">
                      <span className="text-gray-800 font-semibold">SKU:</span>
                      <span className="text-gray-600">
                        {product?.product?.model}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-baseline space-x-2 font-roboto">
                    <p className="py-2">
                      <span className="text-gray-800 font-semibold">
                        Price:
                      </span>
                      <span className="text-lg text-primary font-semibold">
                        ₦{product?.product?.price}
                      </span>
                    </p>
                    <p className="text-base text-gray-400 line-through">
                      {product?.product?.initialPrice}
                    </p>
                  </div>
                  <p className="mt-4 text-gray-600">
                    {product?.product?.brief}
                  </p>
                  {/* size */}
                  <div className="pt-4">
                    <h3 className="text-sm text-gray-800 uppercase mb-1">
                      Size
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-mini"
                        />
                        <label
                          htmlFor="size-mini"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          mini
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-13"
                        />
                        <label
                          htmlFor="size-13"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          13"
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-15"
                        />
                        <label
                          htmlFor="size-15"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          15"
                        </label>
                      </div>
                      <div className="size-selector">
                        <input
                          type="radio"
                          name="size"
                          className="hidden"
                          id="size-17"
                        />
                        <label
                          htmlFor="size-17"
                          className="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                        >
                          17"
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* color */}
                  <div className="pt-4">
                    <h3 className="text-sm text-gray-800 uppercase mb-1">
                      Color
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="color-selecter">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-grey"
                        />
                        <label
                          htmlFor="color-grey"
                          className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                          style={{ backgroundColor: "grey" }}
                        ></label>
                      </div>
                      <div className="color-selecter">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-white"
                        />
                        <label
                          htmlFor="color-white"
                          className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                          style={{ backgroundColor: "white" }}
                        ></label>
                      </div>
                      <div className="color-selecter">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-silver"
                        />
                        <label
                          htmlFor="color-silver"
                          className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                          style={{ backgroundColor: "silver" }}
                        ></label>
                      </div>
                      <div className="color-selecter">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-pink"
                        />
                        <label
                          htmlFor="color-pink"
                          className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                          style={{ backgroundColor: "pink" }}
                        ></label>
                      </div>
                      <div className="color-selecter">
                        <input
                          type="radio"
                          name="color"
                          className="hidden"
                          id="color-black"
                        />
                        <label
                          htmlFor="color-black"
                          className="border border-gray-200 rounded-sm h-5 w-5 cursor-pointer shadow-sm block"
                          style={{ backgroundColor: "black" }}
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-4">
                    <a
                      href="/"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="/"
                      className="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="w-[100%] md:w-[40%] px-2">
                  <TeamCard />
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <div className="flex gap-4 border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
              <p
                onClick={handleShowDetails}
                className={`cursor-pointer hover:text-primary focus:text-primary ${
                  showDetails ? "text-primary" : "text-gray-400"
                }`}
              >
                More details
              </p>
              |
              <p
                onClick={handleShowReviews}
                className={`cursor-pointer hover:text-primary focus:text-primary ${
                  showReviews ? "text-primary" : "text-gray-400"
                }`}
              >
                Reviews
              </p>
            </div>
            <div className={!showDetails ? "hidden" : ""}>
              <div className="pt-6">
                <div className="text-gray-600 space-y-3">
                  <p>{product?.product?.desc}</p>
                </div>
              </div>
              <table className="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tbody>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Color
                    </th>
                    <td className="py-2 px-4 border border-gray-300">
                      {product?.product?.color}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Size
                    </th>
                    <td className="py-2 px-4 border border-gray-300">
                      {product?.product?.size}
                    </td>
                  </tr>
                  <tr>
                    <th className="py-2 px-4 border border-gray-300 w-40 font-medium">
                      Weight
                    </th>
                    <td className="py-2 px-4 border border-gray-300">3.5kg</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={!showReviews ? "hidden" : ""}>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <img src={avatar} alt="" className="w-full border rounded" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating rating="4" reviews="" />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <img src={avatar} alt="" className="w-full border rounded" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating rating="4" reviews="" />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
              <div className="flex py-4 gap-4 w-[70%]">
                <div className="w-[80px]">
                  <img src={avatar} alt="" className="w-full border rounded" />
                </div>
                <div>
                  <p className="text-sm text-gray-800">By Sally Joe</p>
                  <Rating rating="4" reviews="" />
                  <p className="text-xs text-gray-500">21 July, 2022</p>
                  <p className="text-xs text-gray-500 py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                    assumenda excepturi tempore voluptatum dolores explicabo
                    iste reiciendis pariatur consequatur recusandae?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
