import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import axios from "axios";

// Dummy data (replace with API call when backend is ready)

const ScheduleComponent = () => {
  const [data, setData] = useState({
    successRate: "",
    happyStudents: "",
    schedules: "",
    scheduleList: [],
  });

  useEffect(() => {
    const fetchPurchasedSchedules = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/purchased");
        console.log(response.data);

        // Transform the purchased schedules to the desired format
        const scheduleList = response.data.purchasedSchedules.map(schedule => ({
          goalId: schedule.goalId, // Store goal in the data
          name: `${schedule.exam}`, // Exam and goal combined
          duration: schedule.duration, // Use the duration field from the response
        }));

        setData((prevState) => ({
          ...prevState,
          scheduleList, // Updated scheduleList
          successRate: "20+", // Set static values for now, you can update this later with actual data
          happyStudents: "500+",
          schedules: "10+",
        }));
      } catch (error) {
        console.error("Error fetching purchased schedules:", error.message);
      }
    };

    fetchPurchasedSchedules();
  }, []);


  return (
    <div className="text-center p-8 bg-gray-100">
      {/* Stats Section */}
      <div className="flex heading justify-around mb-[4rem] mt-12 transform transition-all duration-1000 ease-in-out">
        <div>
          <h1 className="text-7xl font-bold text-[#DCD300]">
            {data.schedules}
          </h1>
          <p className="text-xl form ">Schedules</p>
        </div>

        <div>
          <h1 className="text-7xl font-bold text-[#DCD300]">
            {data.happyStudents}
          </h1>
          <p className="text-xl form">Happy students</p>
        </div>
        <div>
          <h1 className="text-7xl font-bold text-[#DCD300]">
            {data.successRate}
          </h1>
          <p className="text-xl form">Mutual Matches</p>
        </div>
      </div>

      {/* Schedule List */}
      <div className="bg-white  flex flex-col justify-items-center items-center p-6 rounded-lg shadow-lg max-w-xl mx-auto mb-10 mt-[6rem]">
        <h2 className="text-3xl heading font-bold mb-6">Your Schedules</h2>
        {data.scheduleList.map((schedule, index) => (
          <Link
            to={`/schedule/${schedule.goalId}`} 
            key={index}
            className="w-[60%] form mb-4 py-3 px-6 bg-[#1A6400] text-white rounded-lg flex justify-between items-center"
          >
            <span>{`${schedule.name} (${schedule.duration})`}</span>
            <span>&gt;</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScheduleComponent;
