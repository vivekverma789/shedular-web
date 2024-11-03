import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import SSC from "../assets/SSC.png";
import Railway from "../assets/Railway.png";
import Banking from "../assets/RRB.png";
import "../components/navbar.css";
import Navbar from "../components/Navbar";

const Transfer = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Sample formData object
  const formData = {
    title: "Choose your goal",
    options: [
      { name: "SSC", image: SSC, route: "/transfers/ssc" },
      { name: "RRB", image: Railway, route: "/transfers/rrb" },
      { name: "BANKING", image: Banking, route: "/transfers/banking" },
    ],
  };

  // Handle option change and navigate to the selected route
  const handleOptionChange = (option) => {
    navigate(option.route); // Directly navigate to the selected route
  };

  return (
    <>
      <Navbar />
      <div className="max-w-xl p-4 mx-auto animate-fadeIn">
        <div className="form font-semibold w-full mt-5 flex justify-center">
          Select Organisation
        </div>

        {/* Use formData.options.map() to iterate over options */}
        {formData.options.map((option) => (
          <label
            key={option.name}
            className="container mb-7 max-w-lg mx-auto mt-5  h-[3rem] flex items-center bg-[#D9D9D9] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 transition-colors"
          >
            <div className="flex items-center flex-1">
              {/* Display the image for the current option */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                <img src={option.image} alt={`${option.name} logo`} />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {option.name}
              </span>
            </div>

            <div className="ml-3 mr-2">
              <input
                type="radio"
                value={option.name}
                onChange={() => handleOptionChange(option)} // Handle change and navigate
                className="mr-2"
              />
            </div>
          </label>
        ))}
      </div>
    </>
  );
};

export default Transfer;
