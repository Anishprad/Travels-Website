import React from "react";
import sliuder from "../../Assets/Icons/Others/sliuder.png";

const Introduction = () => {
  return (
    <div className="w-4/5 lg:w-5/6 flex flex-col gap-10 mx-auto h-2/5 mt-20">
      <h1 className="font-semibold gap-1 text-2xl mx-auto">
        Company <span className="text-blue-700">Introduction</span>
      </h1>
      <div className="flex gap-8">
        <div className="w-2/4 flex flex-col gap-4">
          <img src={sliuder} className=" h-56" alt="" />
          <p className="text-sm lg:text-base text-gray-500">We are a team of experienced travel experts who specialize
            in planning and organizing unforgettable travel experiences for our
            clients with a wide range of travel services, including flight
            bookings, hotel reservations and more.</p>
        </div>
        <p className="w-2/4 text-sm lg:text-base text-gray-500">
          Explore the world with us, one adventure at a time. We are a team of
          experienced travel experts who specialize in planning and organizing
          unforgettable travel experiences for our clients with a wide range of
          travel services, including flight bookings, hotel reservations and
          more. A travel agency is a business that specializes in booking travel
          arrangements for individuals or groups. These arrangements can include
          flights, accommodations, transportation, tours, and other activities.
          Travel agencies typically act as intermediaries between travelers and
          travel suppliers, such as airlines, hotels, cruise lines, and tour
          operators.
        </p>
      </div>
      <hr className="w-3/5 border-t-2 border-dotted border-blue-500 mx-auto" />
    </div>
  );
};

export default Introduction;
