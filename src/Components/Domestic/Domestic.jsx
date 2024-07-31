import React from "react";
import Packages from "../Items/Packages";
import Items from "../Items/Items";

const Domestic = () => {
  return (
    <div className=" md:w-5/6 lg:w-5/6 mx-auto flex flex-col items-center mb-4 mt-20 gap-14">
      <div>
        <h1 className="text-2xl font-semibold mb-2 flex gap-2 justify-center">
          Best <span className="text-blue-500">Domestic Tour Packages</span>
        </h1>
        <p className="text-base text-gray-500">
          Discover our fantastic early booking discounts & start planning your
          journey.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-2 justify-items-center w-full mx-auto">
        {Packages.slice(0, 3).map((item) => {
          return <Items product={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Domestic;
