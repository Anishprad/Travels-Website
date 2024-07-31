import React from "react";
import PackageProduct from "../Items/PackageProduct";
import Items2 from "../Items/Items2";

const Testinomials = () => {
  return (
    <div className="md:w-full sm:w-3/5   lg:w-4/5 xl:w-5/6 mx-auto flex flex-col items-center mb-4 mt-20 gap-20">
      <div>
        <h1 className="text-2xl font-semibold mb-2 flex gap-2 justify-center">
          Our <span className="text-blue-500">Testinomials</span>
        </h1>
        <p className="text-base text-gray-500">
          What our clients say about us.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 gap-16 md:gap-12 md:grid-cols-3 lg:gap-16 xl:gap-12 justify-items-center relative w-full">
        {PackageProduct.map((item) => {
          return <Items2 products={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Testinomials;
