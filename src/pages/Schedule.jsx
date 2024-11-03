import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import leave from "../assets/leave.png";
import "../components/navbar.css";
import { useNavigate } from "react-router-dom";
// Dummy data simulating backend response
const scheduleData = {
  startDate: "2024-10-01",
  length: 60, // Total length of the course in days
  subjects: [
    {
      name: "English",
      duration: "02 hours",
      tasks: [
        {
          title: "Fill in the blanks (151-200)",
          duration: "01 H",
          source: "Pinnace/TCS PYQ Book",
        },
        {
          title:
            "Attempt any 2 shifts of English daily from 1000+ shifts available on testbook",
          duration: "01 H",
          source:
            "https://testbook.com/ssc-english-previous-year-questions/test-series/my",
        },
      ],
    },
    {
      name: "Maths",
      duration: "04 hours",
      tasks: [
        {
          title: "Time and work day 4",
          duration: "04 H",
          source: "Youtube channels",
        },
      ],
    },
    {
      name: "Reasoning",
      duration: "03 hours",
      tasks: [
        {
          title: "Calendar day 3",
          duration: "03 H",
          source: "Youtube channels",
        },
      ],
    },
    {
      name: "GS",
      duration: "02 hours",
      tasks: [
        {
          title: "Fill in the blanks (151-200)",
          duration: "01 H",
          source: "Pinnace/TCS PYQ Book",
        },
        {
          title:
            "Attempt any 2 shifts of English daily from 1000+ shifts available on testbook",
          duration: "01 H",
          source:
            "https://testbook.com/ssc-english-previous-year-questions/test-series/my",
        },
      ],
    },
  ],
};

// Helper function to calculate the difference in days from the start date
const getDaysPassed = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();
  const diffTime = Math.abs(today - start);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Adding 1 to make it 1-based counting
};

const Schedule = () => {
  const navigate = useNavigate();

  const handleLeave = () => {
    navigate(-1);
  };

  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    const days = getDaysPassed(scheduleData.startDate);
    setDaysPassed(days);
  }, []);

  // Calculate the window of days to display (3 days before and 3 days after current day)
  const startDay = Math.max(1, daysPassed - 3);
  const endDay = Math.min(scheduleData.length, daysPassed + 3);

  const daysArray = Array.from(
    { length: endDay - startDay + 1 },
    (_, i) => startDay + i
  ); // Creates array for the current range

  return (
    <>
      <div className="min-h-screen px-[4rem]">
        <div className="flex w-full justify-end">
          <img onClick={handleLeave} className="cursor-pointer mt-4" src={leave} alt="leave" />
        </div>
        <div className="heading flex mb-4 justify-center items-center gap-4">
          <h1 className="text-2xl font-bold text-center ">SSC CGL PRE</h1>
          <p className="text-center text-[#1A6400] ">
            ({scheduleData.length - daysPassed} more days to go)
          </p>
        </div>

        {/* Days Tracker */}
        <div className="flex justify-center space-x-4 mb-8">
          {daysArray.map((day, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center rounded-full 
              ${
                daysPassed === day
                  ? "bg-[#1A6400] text-white"
                  : "bg-gray-200 text-gray-800"
              }
            `}
            >
              {daysPassed === day ? <div className="text-xs">Today</div> : day}
            </div>
          ))}
        </div>

        {/* Schedule Section */}
        <div className="form grid grid-cols-1 lg:grid-cols-2 gap-8">
          {scheduleData.subjects.map((subject, index) => (
            <div key={index} className="p-6">
              <h2 className="heading text-lg font-bold mb-4">
                {subject.name} ({subject.duration})
              </h2>
              {subject.tasks.map((task, idx) => (
                <div key={idx} className="mb-4">
                  <li
                    className="flex justify-between"
                  >
                    <div>
                      <p className="text-[16px] mb-1">• {task.title}</p>
                      <p className="text-[14px] text-gray-500">
                        Source: {task.source}
                      </p>
                    </div>

                    <p className="text-right font-bold">{task.duration}</p>
                  </li>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Schedule;
