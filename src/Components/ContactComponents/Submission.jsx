import React from "react";
import { Link } from "react-router-dom";

const Submission = () => {
  return (
    <div className="mt-20 flex flex-col items-center gap-12 justify-center max-h-screen w-full">
        <div className="flex flex-col gap-2 items-center">
      <h1 className="text-4xl font-semibold text-green-400">Congratulations</h1>
      <h3 className="text-2xl font-medium text-gray-700">You've send your Application Form</h3>
        </div>
      <Link to="/"><button className="shadow-xl h-10 p-2 rounded-md bg-blue-500 text-white">Home Page</button></Link>
    </div>
    
  );
};

export default Submission;
