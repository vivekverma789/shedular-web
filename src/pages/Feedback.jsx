import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/navbar.css";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ rating, feedback });
  };
  return (
    <div className="flex flex-col bg-[#D9D9D9] h-screen">
      <div className="bg-white">
        <Navbar />
      </div>
      <div className="bg-white shadow-md rounded-lg flex  flex-col p-8 max-w-3xl w-[90%] mx-auto mt-10">
        <div className="flex items-center">
          {/* Optional: Add profile icon */}
        </div>
        <h2 className="text-2xl form text-center">
          We value your opinion
        </h2>
        <p className="mt-4 form text-center text-gray-600">
          How would you rate your overall experience?
        </p>
        <div className="flex justify-center mt-4 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              onClick={() => handleRating(star)}
              xmlns="http://www.w3.org/2000/svg"
              fill={rating >= star ? "#604720" : "#D9D9D9"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="0"
              className="w-9 h-9 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          ))}
        </div>
        <p className="mt-4 form text-center text-gray-600">
          Kindly take a moment to tell us what you think.
        </p>
        <form className="mt-4 flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
          <textarea
            name="feedback"
            value={feedback}
            rows={5}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Your feedback"
            className="w-[80%] form border text-sm border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            type="submit"
            className="form bg-[#604720] text-white font-bold py-2 px-4 rounded hover:bg-[#4e3711] transition duration-200"
          >
            SHARE MY FEEDBACK
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
