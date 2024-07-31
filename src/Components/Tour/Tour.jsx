import React from "react";
import "../Tour/Tour.css"
import Adventure from "../../Assets/Icons/Heritage/Adventure.png";
import Cultural from "../../Assets/Icons/Heritage/Cultural.png";
import Holiday from "../../Assets/Icons/Heritage/Holiday.png";
import Pilgrimage from "../../Assets/Icons/Heritage/Pilgrimage.png";
import WorldHeritage from "../../Assets/Icons/Heritage/WorldHeritage.png";

const Tour = () => {
  return (
    <div className="md:5/6 lg:w-4/5 xl:w-5/6 mx-auto flex flex-col items-center mb-4 md:mt-40 lg:mt-20 gap-10">
      <div>
        <h1 className="text-2xl font-semibold mb-2 flex gap-2 justify-center">
          Our <span className="text-blue-500">Tour Variants</span>
        </h1>
        <p className="text-base text-gray-500">
          Choose your tour you want to visit
        </p>
      </div>
      <div className="pictures grid grid-cols-5 justify-items-center w-full">
        <img src={Cultural} className="tourImage md:w-32 lg:w-40 md:h-64 lg:h-76 xl:w-52 xl:h-80 rounded-2xl" alt="" />
        <img src={WorldHeritage} className="tourImage md:w-32 lg:w-40 md:h-64 lg:h-76 xl:w-52 xl:h-80 rounded-2xl" alt="" />
        <img src={Pilgrimage} className="tourImage md:w-32 lg:w-40 md:h-64 lg:h-76 xl:w-52 xl:h-80 rounded-2xl" alt="" />
        <img src={Adventure} className="tourImage md:w-32 lg:w-40 md:h-64 lg:h-76 xl:w-52 xl:h-80 rounded-2xl" alt="" />
        <img src={Holiday} className="tourImage md:w-32 lg:w-40 md:h-64 lg:h-76 xl:w-52 xl:h-80 rounded-2xl" alt="" />
      </div>
    </div>
  );
};

export default Tour;
