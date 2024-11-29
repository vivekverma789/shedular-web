import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import leave from "../assets/leave.png";
import LeaveForm from "./LeaveForm";
import api from "../apiConfig/apiConfig";

const Schedule = () => {
  const { goalId } = useParams();
  const navigate = useNavigate();
  const [scheduleData, setScheduleData] = useState(null);
  const [currentDay, setCurrentDay] = useState(1);
  const [showLeaveForm, setShowLeaveForm] = useState(false);
  const [remainingLeaves, setRemainingLeaves] = useState(0);
  const [leaveInfo, setLeaveInfo] = useState(null); // New state for leave info

  useEffect(() => {
    const fetchScheduleData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve token from local storage

        const response = await api.get(
          `/course-content/${goalId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.message === "You are currently on leave.") {
          setLeaveInfo(response.data); // Set leave info if on leave
        } else {
          setScheduleData(response.data);
          setRemainingLeaves(response.data.remainingLeaves);

          // Calculate current day based on purchase date
          const purchasedDate = new Date(response.data.purchasedAt);
          const today = new Date();
          const daysElapsed =
            Math.floor((today - purchasedDate) / (1000 * 60 * 60 * 24)) + 1;
          setCurrentDay(daysElapsed);
        }
      } catch (error) {
        console.error("Error fetching schedule data:", error.message);
      }
    };

    fetchScheduleData();
  }, [goalId]);

  const handleLeaveSubmitted = (updatedLeaves) => {
    setRemainingLeaves(updatedLeaves);
  };

  if (leaveInfo) {
    return (
      <div className="min-h-screen px-[4rem] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center">{leaveInfo.message}</h1>
        <p className="text-center text-gray-600 mt-2">
          Your leave period:{" "}
          <strong>
            {new Date(leaveInfo.leaveStart).toLocaleDateString()} -{" "}
            {new Date(leaveInfo.leaveEnd).toLocaleDateString()}
          </strong>
        </p>
        <p className="text-center text-gray-600 mt-2">{leaveInfo.note}</p>
      </div>
    );
  }

  if (!scheduleData) {
    return <div>Loading...</div>;
  }

  const { totalDays } = scheduleData;

  const generateDaysArray = () => {
    const days = [];
    if (totalDays <= 5) {
      for (let i = 1; i <= totalDays; i++) {
        days.push(i);
      }
    } else {
      const startDay = Math.max(currentDay - 4, 1);
      for (let i = 0; i < 5; i++) {
        const day = ((startDay + i - 1) % totalDays) + 1;
        days.push(day);
      }
    }
    return days;
  };

  const daysArray = generateDaysArray();

  return (
    <div className="min-h-screen px-[4rem]">
      <div className="flex w-full justify-end">
        <div className="schedule">
          <img
            onClick={() => setShowLeaveForm(true)}
            src={leave}
            alt="Leave"
          />
          {showLeaveForm && (
            <LeaveForm
              onClose={() => setShowLeaveForm(false)}
              goalId={goalId}
              maxLeaves={scheduleData.maxLeaves}
              remainingLeaves={remainingLeaves}
              onLeaveSubmitted={handleLeaveSubmitted}
            />
          )}
        </div>
      </div>
      <div className="heading flex mb-4 justify-center items-center gap-4">
        <h1 className="text-2xl font-bold text-center">{scheduleData.goal}</h1>
        <p className="text-center text-[#1A6400]">
          ({scheduleData.remainingDays} more days to go)
        </p>
      </div>
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
      <div className="form grid grid-cols-1 lg:grid-cols-2 gap-8">
        {scheduleData.subjects.map((subject, index) => {
          const todaysContent = subject.dailyContents.find(
            (content) => content.day === currentDay
          );
          const totalHours =
            todaysContent?.topics.reduce((sum, topic) => sum + topic.hours, 0) ||
            0;

          return (
            <div
              key={index}
              className="p-0 border border-gray-300 rounded-lg"
            >
              <div
                className={`flex justify-between items-center heading text-lg font-bold mb-4 p-2 ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
                }`}
              >
                <span>{subject.title}</span>
                <span className="text-sm text-white">Total Hours: {totalHours}</span>
              </div>
              {todaysContent?.topics.map((topic, idx) => (
                <div key={idx} className="mb-4 p-3 flex justify-between items-center">
                  <div>
                    <p className="text-[16px] mb-1 font-bold">{topic.name}</p>
                    <p className="text-sm mb-1 text-gray-600">{topic.description}</p>
                    {topic.link && (
                      <a
                        href={topic.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                      >
                        View Resource
                      </a>
                    )}
                  </div>
                  <div className="text-gray-700 font-medium">{topic.hours} hrs</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;
