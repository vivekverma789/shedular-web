import React from "react";
import Navbar from "../components/Navbar";
import "../components/navbar.css";
import SSC from "../assets/SSC.png";
import Railway from "../assets/Railway.png";

// Dummy data (assumed to be coming from backend)
const courses = [
  {
    id: 1,
    title: "3 MONTHS",
    time: "6 Hours / Day",
    subtitle: "SSC CGL Pre",
    features: [
      "New pattern resources",
      "Mocks included",
      "GS included",
      "24×7 access",
    ],
    image: SSC,
    price: "₹29",
  },
  {
    id: 2,
    title: "3 MONTHS",
    time: "6 Hours / Day",
    subtitle: "SSC CGL Pre",
    features: [
      "New pattern resources",
      "Mocks included",
      "GS included",
      "24×7 access",
    ],
    image: SSC,
    price: "₹29",
  },
  {
    id: 3,
    title: "3 MONTHS",
    time: "6 Hours / Day",
    subtitle: "SSC CGL Pre",
    features: [
      "New pattern resources",
      "Mocks included",
      "GS included",
      "24×7 access",
    ],
    image: SSC,
    price: "₹29",
  },
  {
    id: 4,
    title: "3 MONTHS",
    time: "6 Hours / Day",
    subtitle: "IBPS PO",
    features: [
      "New pattern resources",
      "Mocks included",
      "GS included",
      "24×7 access",
    ],
    image: Railway,
    price: "₹29",
  },
];

const OurCourses = () => {
  return (
    <>
      <Navbar />
      <div className=" py-10 px-[4rem]">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by exam"
            className="w-3/5 p-3 rounded-md shadow-md border border-gray-300 "
          />
        </div>

        <div className="form grid gap-[5rem] grid-cols-5">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-[#F0C5E72E] shadow-md rounded-md p-6 w-64 flex-shrink-0"
            >
              <div className="flex items-center mb-4">
                <img
                  src={course.image}
                  alt="Course logo"
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <div className="flex items-center">
                    <h2 className="heading text-md font-bold text-[#364374]">
                      {course.title}
                    </h2>
                    <span className="font-bold text-[#364374]">|</span>
                    <span className="heading text-xs font-bold text-[#364374]">{course.time}</span>
                  </div>

                  <p className="text-sm text-[#364374]">{course.subtitle}</p>
                </div>
              </div>
              <hr className="mb-4 h-[2px] bg-black" />
              <ul className="text-sm mb-4">
                {course.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex font-semibold items-center mb-1"
                  >
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
              <div className="flex justify-end gap-4 items-center">
                <span className="text-lg font-bold">{course.price}</span>
                <button className="bg-[#1A6400] text-white px-4 py-2 rounded-md text-sm">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurCourses;
