import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import leave from "../assets/leave.png";

const Schedule = () => {
  const { goalId } = useParams();
  const navigate = useNavigate();
  const [scheduleData, setScheduleData] = useState(null);
  const [currentDay, setCurrentDay] = useState(1);

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/course-content/${goalId}`);
        setScheduleData(response.data);

        // Calculate current day based on purchase date
        const purchasedDate = new Date(response.data.purchasedAt);
        const today = new Date();
        const daysElapsed = Math.floor((today - purchasedDate) / (1000 * 60 * 60 * 24)) + 1;
        setCurrentDay(daysElapsed);
      } catch (error) {
        console.error("Error fetching schedule data:", error.message);
      }
    };

    fetchScheduleData();
  }, [goalId]);

  const handleLeave = () => {
    navigate(-1);
  };
  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  const { totalDays } = scheduleData;
  const daysArray = [];

  // If there are fewer than 5 days remaining, show previous days as well
  if (totalDays - currentDay < 5) {
    const previousDays = Array.from({ length: 4 }, (_, i) => currentDay - (4 - i));
    daysArray.push(...previousDays);
  }

  // Add the current day
  daysArray.push(currentDay);

  // If there are still fewer than 5 days, add the next days
  const remainingDays = 5 - daysArray.length;
  if (remainingDays > 0) {
    const nextDays = Array.from({ length: remainingDays }, (_, i) => currentDay + i + 1);
    daysArray.push(...nextDays);
  }

  return (
    <div className="min-h-screen px-[4rem]">
      <div className="flex w-full justify-end">
        <img onClick={handleLeave} className="cursor-pointer mt-4" src={leave} alt="leave" />
      </div>
      <div className="heading flex mb-4 justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-center">{scheduleData.goal}</h1>
        <p className="text-center text-[#1A6400]">
          ({scheduleData.remainingDays} more days to go)
        </p>
      </div>

      {/* Days Tracker */}
      <div className="flex justify-center space-x-4 mb-8">
        {daysArray.map((day, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center rounded-full 
            ${
              currentDay === day
                ? "bg-[#1A6400] text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {currentDay === day ? <div className="text-xs">Today</div> : day}
          </div>
        ))}
      </div>

      {/* Display today's content */}
      <div className="form grid grid-cols-1 lg:grid-cols-2 gap-8">
  {scheduleData.subjects.map((subject, index) => (
    <div
      key={index}
      className="p-0 border border-gray-300 rounded-lg" // Add border and border-radius to each subject card
    >
      {/* Header with dynamic background color */}
      <h2
        className={`heading text-lg font-bold mb-4 p-2  ${
          index % 2 === 0 ? 'bg-blue-500' : 'bg-green-500'
        }`} // Alternating background color based on index
      >
        {subject.title}
      </h2>

      {subject.dailyContents
        .filter((content) => content.day === currentDay) // Show only today's content
        .map((content, idx) => (
          <div key={idx} className="mb-4 p-3">
            <p className="text-[16px] mb-1">• {content.content}</p>
          </div>
        ))}
    </div>
  ))}
</div>

    </div>
  );
};

export default Schedule;
