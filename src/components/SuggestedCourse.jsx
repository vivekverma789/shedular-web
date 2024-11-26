import React, { useEffect, useState } from "react";
import axios from "axios";
import SSC from "../assets/SSC.png";
import "./navbar.css";

const handlePurchase = async (schedule) => {
  try {
    // const userId = "your-user-id"; // Replace with actual user ID from your auth context or state
    const response = await axios.post("http://localhost:5000/api/purchase", {
      // userId,
      scheduleId: schedule.id,
      goalId: schedule.goalId,
      goal: schedule.goal,
      duration: schedule.duration,
      exam: schedule.exam,
      features: schedule.features,
      price: schedule.price,
    });

    console.log("Purchase Response:", response.data);
    alert("Schedule purchased successfully!");
  } catch (error) {
    console.error("Error purchasing schedule:", error.message);
    alert("Failed to purchase schedule. Please try again later.");
  }
};

const ScheduleCard = ({ schedule, isPrimary = false, index }) => (
  <div
    className={`rounded-lg shadow p-5 ${
      isPrimary ? "bg-green-100" : "bg-gray-100"
    }`}
    style={{ animationDelay: `${index * 0.2}s` }}
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
      {schedule.features.map((feature, idx) => (
        <li key={idx} className="flex text-sm font-semibold items-center">
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
      <button className="form bg-[#1A6400] text-white px-4 py-2 rounded"
       onClick={() => handlePurchase(schedule)}
       >
        Buy Now
      </button>
    </div>
  </div>
);

const SuggestedCourse = ({ selectedOptions }) => {
  const [customSchedule, setCustomSchedule] = useState(null);
  const [similarSchedules, setSimilarSchedules] = useState([]);
  const [otherExams, setOtherExams] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        if (!selectedOptions) {
          throw new Error("Selected options are missing!");
        }

        console.log("Sending selectedOptions to server:", selectedOptions);

        const response = await axios.post(
          "http://localhost:5000/api/schedule/match",
          selectedOptions
        );

        console.log("Server Response:", response.data);

        const { customSchedule, similarSchedules, otherExams } = response.data;
        setCustomSchedule(customSchedule);
        setSimilarSchedules(similarSchedules);
        setOtherExams(otherExams);
      } catch (err) {
        console.error("Error fetching schedules:", err.message);
        setError("Failed to load schedules. Please try again later.");
      }
    };

    fetchSchedules(); // Automatically send data to server
  }, [selectedOptions]);

  if (error) return <p className="text-red-500">{error}</p>;
  if (!customSchedule) return <p>Loading schedules...</p>;

  return (
    <div className="container mx-auto p-4 md:px-[4rem] lg:px-[4rem] animate-fadeIn">
      <h2 className="form text-lg font-semibold mb-4">Your customized schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-[3rem]">
        <ScheduleCard schedule={customSchedule} isPrimary={true} index={0} />
      </div>

      <h3 className="form text-lg font-semibold mt-8 mb-4">Similar study schedules</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[3rem]">
        {similarSchedules.map((schedule, idx) => (
          <ScheduleCard key={idx} schedule={schedule} index={idx + 1} />
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-8 mb-4">Targeting other exams as well?</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-[3rem]">
        {otherExams.map((schedule, idx) => (
          <ScheduleCard key={idx} schedule={schedule} index={idx + 5} />
        ))}
      </div>
    </div>
  );
};

export default SuggestedCourse;
