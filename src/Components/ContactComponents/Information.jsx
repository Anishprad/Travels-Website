import React from "react";

const Information = () => {
  return (
    <div className="w-full px-4 md:px-0 lg:px-0 xl:px-0 md:w-5/6 lg:w-5/6 xl:w-5/6 h-3/5 items-center my-10 flex flex-col gap-10 mx-auto">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-xl text-blue-700 font-semibold">
          Contact Information
        </h1>
        <p className="text-sm text-gray-500">Feel free to contact us</p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-8 items-center w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.913199161835!2d85.34466317425208!3d27.65815712766146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1757e5ab4133%3A0x363ee7e05f8c4fac!2sNew%20Bhadrakali%20oil%20store!5e0!3m2!1sen!2snp!4v1717484070273!5m2!1sen!2snp"
         className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3"
          width="400"
          height="320"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      <div className="md:h-80 lg:h-80 xl:h-80 w-2/3 md:w-1/3 lg:w-1/3 xl:w-1/3 gap-4 flex flex-col">
        <div className="flex flex-col w-full md:h-24 lg:h-24 xl:h-24 gap-2 px-8 py-4 md:p-4 lg:p-4 xl:p-4 relative shadow border">
            <h3 className="text-blue-600">Phone</h3>
            <p className="text-sm text-gray-500">+977-9808893123</p>
            <p className="text-sm text-gray-500">01-5250515</p>
            <img src="" alt="" />
        </div>
        <div className="flex flex-col w-full md:h-24 lg:h-24 xl:h-24 gap-2 px-8 py-4 md:p-4 lg:p-4 xl:p-4 relative shadow border">
            <h3 className="text-blue-600">Phone</h3>
            <p className="text-sm text-gray-500">+977-9808893123</p>
            <p className="text-sm text-gray-500">01-5250515</p>
            <img src="" alt="" />
        </div>
        <div className="flex flex-col w-full md:h-24 lg:h-24 xl:h-24 gap-2 px-8 py-4 md:p-4 lg:p-4 xl:p-4 relative shadow border">
            <h3 className="text-blue-600">Phone</h3>
            <p className="text-sm text-gray-500">+977-9808893123</p>
            <p className="text-sm text-gray-500">01-5250515</p>
            <img src="" alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Information;
