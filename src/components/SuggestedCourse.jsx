import React from "react";
import SSC from "../assets/SSC.png";
import "./navbar.css";

// Simulate data fetched from an API or backend
const dummyData = {
  customSchedule: {
    duration: "3 MONTHS",
    hoursPerDay: 6,
    exam: "SSC CGL Pre + Mains",
    features: [
      "New pattern resources",
      "Mocks included",
      "GS included",
      "24*7 access",
    ],
    price: 29,
  },
  similarSchedules: [
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "SSC CGL Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "SSC CGL Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "SSC CGL Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
  ],
  otherExams: [
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "RRB GD Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "RRB GD Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
    {
      duration: "3 MONTHS",
      hoursPerDay: 6,
      exam: "RRB GD Pre",
      features: [
        "New pattern resources",
        "Mocks included",
        "GS included",
        "24*7 access",
      ],
      price: 29,
    },
  ],
};

// A reusable card component to display schedules
const ScheduleCard = ({ schedule, isPrimary = false, index }) => (
  <div
    className={`rounded-lg shadow p-5 ${
      isPrimary ? "bg-green-100" : "bg-gray-100"
    } `}
    style={{ animationDelay: `${index * 0.2}s` }} // Adding a delay for each card
  >
    <div className="flex gap-3 mb-2">
      <img className="h-[40px] w-[40px]" src={SSC} alt="SSC" />
      <div className="flex flex-col">
        <div className="heading text-[#364374] font-bold flex items-center gap-1">
          <p className="font-bold">{schedule.duration}</p>
          <p className="font-bold">|</p>
          <p className="text-sm">{schedule.hoursPerDay} Hours / Day</p>
        </div>
        <p className="form text-[0.7rem] mb-1">{schedule.exam}</p>
      </div>
    </div>
    <hr className="h-[2px] mb-[1.5rem] rounded-md bg-black" />
    <ul className="form text-sm mb-6">
      {schedule.features.map((feature, index) => (
        <li key={index} className="flex text-sm font-semibold items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1 text-[#1A6400]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <div className="flex justify-end gap-[1.5rem] items-center">
      <p className="form font-bold">₹{schedule.price}</p>
      <button className="form bg-[#1A6400] text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  </div>
);

const SuggestedCourse = () => {
  return (
    <div className="container mx-auto p-4 md:px-[4rem] lg:px-[4rem] animate-fadeIn">
      <h2 className="form text-lg font-semibold mb-4">Your customized schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[3rem]">
        <ScheduleCard schedule={dummyData.customSchedule} isPrimary={true} index={0} />
      </div>

      <h3 className="form text-lg font-semibold mt-8 mb-4">Similar study schedules</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[3rem]">
        {dummyData.similarSchedules.map((schedule, index) => (
          <ScheduleCard key={index} schedule={schedule} index={index + 1} />
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">Targeting other exams as well?</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[3rem]">
        {dummyData.otherExams.map((schedule, index) => (
          <ScheduleCard key={index} schedule={schedule} index={index + 5} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedCourse;