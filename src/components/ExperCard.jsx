import React, { useState, useEffect } from "react";
import axios from "axios";
import "./navbar.css";

const ExpertsCard = () => {
  const [experts, setExperts] = useState([]);

  // Fetch experts data from the server on component mount
  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/experts");
        setExperts(response.data);  // Store the fetched data in state
      } catch (error) {
        console.error("Failed to fetch experts:", error);
      }
    };

    fetchExperts();
  }, []);

  return (
    <div className="bg-[#E9E7C4] p-10">
      <h1 className="text-center heading text-3xl font-bold mt-8 mb-[3rem]">
        Meet our IITian Experts
      </h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-5 mt-10">
        <div className="inline-flex space-x-6 mb-10">
          {experts.length > 0 ? (
            experts.map((expert, index) => (
              <div
                key={index}
                className="bg-white heading shadow-md rounded-md py-6 w-64 text-center inline-block"
              >
                <div className="h-40 mb-4 rounded"></div>
                <hr className="h-[1px] bg-black mb-4" />
                <h2 className="font-bold text-lg">{expert.name}</h2>
                <div className="flex flex-col justify-start justify-items-start items-start px-6 gap-2">
                  <li className="text-sm mt-2">{expert.degree}</li>
                  <li className="text-sm">{expert.experience}</li>
                </div>
              </div>
            ))
          ) : (
            <p>No experts available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
