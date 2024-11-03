import React from "react";
import "./navbar.css";

const experts = [
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
  {
    name: "Rohan Gupta",
    degree: "BTech, IIT Jodhpur",
    experience: "5Y teaching experience",
  },
];

const ExpertsCard = () => {
  return (
    <div className="bg-[#E9E7C4] p-10">
      <h1 className="text-center heading text-3xl font-bold mt-8 mb-[3rem]">
        Meet our IITian Experts
      </h1>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide mb-5 mt-10">
        <div className="inline-flex space-x-6 mb-10">
          {experts.map((expert, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertsCard;
