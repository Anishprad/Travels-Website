import React from "react";
import Missions from "../../Assets/Icons/Others/Missions.png";
import Visions from "../../Assets/Icons/Others/Visions.png";
import Goals from "../../Assets/Icons/Others/Goals.png";

const Mission = () => {
  return (
    <div className="flex flex-col gap-14 mt-16 w-4/5 md:5/6 lg:w-5/6 mx-auto">
      <h1 className="text-2xl gap-1 font-semibold mx-auto">
        Our <span className="text-blue-700">Mission, Vision & Goals</span>
      </h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-14 lg:justify-items-stretch">
        <div className="flex flex-col items-center border p-4 md:w-[70%] md:mx-auto lg:w-72 xl:w-[350px] md:h-56 lg:h-64 gap-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center">
          <img src={Missions} className="h-16 w-16" alt="" />
          <h1 className="text-blue-700 font-medium text-base">Mission</h1>
          </div>
        <p className="text-gray-600 text-sm font-medium">
          entrepreneurs funded, mentored and supported through AMPLIFY, our
          startup pitch competition entrepreneurs funded, mentored and supporte d
          through AMPLIFY, our startup pitch competition
        </p>
        </div>
        <div className="flex flex-col items-center border p-4  md:w-[70%] md:mx-auto lg:w-72 xl:w-[350px] md:h-56 lg:h-64 gap-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center">
          <img src={Visions} className="h-16 w-16" alt="" />
          <h1 className="text-blue-700 font-medium text-base">Vision</h1>
          </div>
        <p className="text-gray-600 text-sm font-medium">
          entrepreneurs funded, mentored and supported through AMPLIFY, our
          startup pitch competition entrepreneurs funded, mentored and supported
          through AMPLIFY, our startup pitch competition
        </p>
        </div>
        <div className="flex flex-col items-center border p-4 md:w-[70%] md:mx-auto lg:w-72 xl:w-[350px] md:h-56 lg:h-64 gap-8 rounded-2xl shadow-md">
          <div className="flex flex-col items-center">
          <img src={Goals} className="h-16 w-16" alt="" />
          <h1 className="text-blue-700 font-medium text-base">Goals</h1>
          </div>
        <p className="text-gray-600 text-sm font-medium">
          entrepreneurs funded, mentored and supported through AMPLIFY, our
          startup pitch competition entrepreneurs funded, mentored and supported
          through AMPLIFY, our startup pitch competition
        </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
