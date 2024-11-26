import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SSC from "../assets/SSC.png";
import Banking from "../assets/RRB.png";
import RRB from "../assets/Railway.png";
import Others from "../assets/Others.png";
import pre from "../assets/PreLimsT1.png";
import mains from "../assets/Mains.png";
import both from "../assets/Both.png";
import fresher from "../assets/Fresher.png";
import repeater from "../assets/Repeater.png";
import less5 from "../assets/Less5.png";
import more5 from "../assets/more5.png";
import "../components/navbar.css";
import Navbar from "../components/Navbar";

const Form = () => {
  const formData = [
    {
      title: "Choose your goal",
      options: [
        { name: "SSC", image: SSC },
        { name: "RRB", image: RRB },
        { name: "BANKING", image: Banking },
        // { name: "OTHER", image: Others },
      ],
    },
    {
      title: "Choose your Exam",
      options: {
        SSC: [
          { name: "SSC CGL", image: SSC },
          { name: "SSC CHSL", image: SSC },
          { name: "SSC MTS", image: SSC },
          { name: "SSC GD", image: SSC },
        ],
        RRB: [
          { name: "RRB NTPC", image: RRB },
          { name: "RRB JE", image: RRB },
          { name: "RRB ALP", image: RRB },
        ],
        BANKING: [
          { name: "IBPS PO", image: Banking },
          { name: "IBPS Clerk", image: Banking },
          { name: "SBI PO", image: Banking },
          { name: "SBI Clerk", image: Banking },
        ],
        // OTHER: [
        //   { name: "Other Exam 1", image: Others },
        //   { name: "Other Exam 2", image: Others },
        // ],
      },
    },
    {
      title: "Which category you fall",
      options: [
        { name: "FRESHER", image: fresher },
        { name: "REPEATER", image: repeater },
      ],
    },
    {
      title: "Want to prepare for",
      options: [
        { name: "PRELIMS (TIER 1)", image: pre },
        { name: "MAINS (TIER 2)", image: mains },
        { name: "PRELIMS + MAINS", image: both },
      ],
    },
    {
      title: "Number of hours you can devote per day",
      options: [
        { name: "Less than 5", image: less5 },
        { name: "More than 5", image: more5 },
      ],
    },
    {
      title: "You want to finish preparation within",
      options: [
        { name: "60-days", image: less5 },
        { name: "120-days", image: more5 },
        { name: "150-days", image: more5 },
      ],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [animate, setAnimate] = useState(false);
  const totalSteps = 6;
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(false); // Reset animation on page change
    setTimeout(() => {
      setAnimate(true); // Trigger animation after page loads
    }, 100);
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalSteps) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleExit = () => {
    navigate(-1); // Navigate to homepage on exit
  };

  const handleOptionChange = (pageIndex, option) => {
    setSelectedOptions((prev) => ({ ...prev, [pageIndex]: option }));
  };

  const handleSubmit = () => {
    // Extract selected option names
    const stageMapping = {
      "PRELIMS (TIER 1)": "PRELIMS",
      "MAINS (TIER 2)": "MAINS",
      "PRELIMS + MAINS": "PRELIMS+MAINS",
    };
    const submissionData = {
      goal: selectedOptions[1]?.name, // Goal selected in step 1
      exam: selectedOptions[2]?.name.split(" ")[1], // Exam selected in step 2
      category: selectedOptions[3]?.name, // Category selected in step 3
      hrsanddays: selectedOptions[5]?.name.includes("Less")
        ? "<5"
        : ">5", // Hours per day in step 5
      stage: stageMapping[selectedOptions[4]?.name], // Stage selected in step 4
      duration: selectedOptions[6]?.name, // Stage selected in step 4

    };
  
    console.log("Form submitted with data:", submissionData);
  
    // Navigate to the customised schedule page and pass the data
    navigate("/customised-schedule", { state: { submissionData } });
  };
  

  const getCurrentOptions = () => {
    if (currentPage === 2) {
      const selectedGoal = selectedOptions[1]?.name;
      return formData[1].options[selectedGoal] || [];
    }
    return formData[currentPage - 1].options;
  };

  const getImageForCurrentPage = () => {
    const selectedGoal = selectedOptions[1]?.image;
    return selectedGoal || "";
  };

  return (
    <>
      <Navbar />
      <div className="form w-full px-5 max-w-lg mx-auto mt-10">
        {/* Progress Bar with breaks */}
        <div className="flex flex-col space-y-3 items-center justify-between mb-[3rem]">
          <div className="flex justify-between w-full">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className="text-black font-semibold text-sm underline"
            >
              {currentPage !== 1 && <>&larr; Previous</>}
            </button>

            <button
              onClick={handleExit}
              className="text-black font-semibold text-sm underline"
            >
              Exit
            </button>
          </div>

          <div className="flex justify-between w-full h-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-1 w-full rounded-full ${
                  index < currentPage ? "bg-green-700" : "bg-gray-300"
                }`}
                style={{ marginRight: index < totalSteps - 1 ? "10px" : "0" }}
              ></div>
            ))}
          </div>
        </div>

        {/* Form Page Content */}
        <div
          className={`w-full transform transition-all duration-1000 ease-in-out ${
            animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-center text-lg font-semibold mb-4">
            {formData[currentPage - 1].title}
          </h2>

          {/* Radio options */}
          <div className="flex flex-col space-y-5">
            {getCurrentOptions().map((option) => (
              <label
                key={option.name}
                className="container flex items-center bg-[#D9D9D9] rounded-md py-2 px-4 cursor-pointer hover:bg-gray-200 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center flex-1">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3">
                    <img
                      src={option.image || getImageForCurrentPage()}
                      alt={option.name}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {option.name}
                  </span>
                </div>
                <div className="ml-3 mr-2">
                  <input
                    type="radio"
                    name={`step-${currentPage}`}
                    value={option.name}
                    checked={selectedOptions[currentPage]?.name === option.name}
                    onChange={() => handleOptionChange(currentPage, option)}
                    className="mr-2"
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mt-6">
          {currentPage < totalSteps ? (
            <button
              onClick={handleNext}
              disabled={!selectedOptions[currentPage]}
              className="bg-blue-500  hover:bg-blue-600 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#1A6400] hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
