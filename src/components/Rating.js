import React from "react";

const Rating = (props) => {
  const { rating, reviews } = props;
  return (
    <div className="flex gap-1 text-sm text-yellow-400 items-center">
      <span>
        <i
          className={
            rating >= 1
              ? "fa-solid fa-star"
              : rating >= 0.5
              ? "fa-solid fa-star-half"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 2
              ? "fa-solid fa-star"
              : rating >= 1.5
              ? "fa-solid fa-star-half"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 3
              ? "fa-solid fa-star"
              : rating >= 2.5
              ? "fa-solid fa-star-half"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 4
              ? "fa-solid fa-star"
              : rating >= 3.5
              ? "fa-solid fa-star-half"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating >= 5
              ? "fa-solid fa-star"
              : rating >= 4.5
              ? "fa-solid fa-star-half"
              : "fa-regular fa-star"
          }
        ></i>
      </span>
      <span className="text-sm text-gray-500">{`${reviews} reviews`} </span>
    </div>
  );
};

export default Rating;
