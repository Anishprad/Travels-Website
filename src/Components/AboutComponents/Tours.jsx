import React from "react";
import ToursProduct from "../Items/ToursProduct";
import Items3 from "../Items/Items3";

const Tours = () => {
  return (
    <div className="flex flex-col sm:w-full sm:px-4 px-0 md:px-0 lg:px-0 xl:px-0 md:w-5/6 lg:w-5/6 xl:w-5/6 mx-auto gap-24 md:mt-16 md:mb-10 lg:mt-16">
      <h1 className="font-semibold gap-1 text-2xl lg:text-3xl mx-auto">
        Our <span className="text-blue-700">Tours Guides</span>
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 md:mx-auto lg:grid-cols-4 justify-items-stretch sm:gap-16 md:gap-16 lg:gap-12">
        {ToursProduct.map((item)=>{
            return (
                <Items3 products={item} key={item.id}/>
            )
        })}
      </div>
    </div>
  );
};

export default Tours;
