import React from "react";
import { Link } from "react-router-dom";
import "../Items/Items.css";

// Main
const Items = (props) => {
  // Props
  const { product } = props;

  // Variables
  const { id, image, rating, location, duration, main, price } = product ?? {};

  return (
    <div className="flex flex-col items-center gap-7">
      {/* <Comp product1={product1}/> */}
      <Link to={`/product/${id}`}>
        <div className="products sm:w-96 md:w-52 md:h-64 lg:w-72 lg:h-72 xl:w-[350px] rounded-2xl shadow-lg relative">
          <img src={image} className="image h-3/5 w-full" alt="" />
          <img
            src={rating}
            className="w-12 h-7 rounded p-1 absolute top-2 left-2"
            alt=""
          />
          <div className="h-2/5 p-2 flex flex-col lg:px-7 lg:pt-4 gap-1 xl:gap-2 xl:pt-4">
            <p className="text-sm text-gray-400">{location}</p>
            <span className="flex justify-between">
              <h1 className="font-semibold text-base xl:text-lg">{main}</h1>
              <p className="text-sm xl:text-base">{duration}</p>
            </span>
            <span className="flex justify-between">
              <p className="text-sm xl:text-base">Starting Price</p>
              <h1 className="font-semibold text-base xl:text-lg">${price}</h1>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Items;
