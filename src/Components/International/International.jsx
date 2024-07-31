import React from "react";
import Items from "../Items/Items";
import Packages from "../Items/Packages";

const International = () => {
  return (
    <div className="md:w-5/6 lg:w-5/6 xl:w-5/6 mx-auto flex flex-col items-center mb-4 mt-20 gap-14">
      <div className="text-center">
        <h1 className="text-2xl font-semibold mb-2 flex justify-center gap-2">
          Top <span className="text-blue-500">International Tour Packages</span>
        </h1>
        <p className="text-base text-gray-500">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-8 gap-8 sm:p-4 md:gap-12 justify-items-center w-full lg:gap-6">
        {Packages.slice(3,6).map((item, i) => {
          return <Items product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default International;
// const limitedPackage = Packages.slice(0,2)
