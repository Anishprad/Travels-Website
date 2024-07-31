import React from "react";

const Items2 = ({ products }) => {
  return (
    <div className="flex flex-col items-center w-96 md:w-48 gap-4 md:h-64 lg:w-56 lg:h-56 xl:w-[350px] bg-white lg:gap-4 xl:gap-7 relative border p-4 rounded-2xl border-gray-200 shadow-md">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-sm xl:text-base text-blue-300">{products.place}</p>
        <h1 className="text-xl text-blue-500">{products.name}</h1>
      </div>
     
      <p className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quos, aut eveniet natus sapiente laboriosam?
      </p>
      <img src={products.image} className="w-12 h-12 absolute -top-10 left-34 md:-top-10 lg:-top-10 md:left-20 lg:left-24 xl:left-36" alt="" />
    </div>
  );
};

export default Items2;
