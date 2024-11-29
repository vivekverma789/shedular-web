import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Camera from "../assets/camera.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../apiConfig/apiConfig";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
  });
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  // Fetch user profile data (name and email)
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve token from local storage
        const response = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setProfileData({
          name: response.data.name,
          email: response.data.email,
        });
      } catch (error) {
        console.error("Error fetching profile data:", error.message);
      }
    };

    fetchProfileData();
  }, []);

  // Fetch purchased schedules
  useEffect(() => {
    const fetchPurchasedSchedules = async () => {
      try {
        const token = localStorage.getItem("authToken"); // Retrieve token from local storage

        const response = await api.get("/purchased", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);

        // Transform the purchased schedules to the desired format
        const scheduleList = response.data.purchasedSchedules.map((schedule) => ({
          goalId: schedule.goalId, // Store goal in the data
          name: `${schedule.exam}`, // Exam and goal combined
          duration: schedule.duration, // Use the duration field from the response
        }));

        setSchedules(scheduleList);
      } catch (error) {
        console.error("Error fetching purchased schedules:", error.message);
      }
    };

    fetchPurchasedSchedules();
  }, []);

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <>
      <Navbar />
      <div className="mx-auto p-4 md:px-[4rem] lg:px-[4rem] mt-4 animate-fadeIn">
        <h1 className="text-lg font-semibold mb-4 flex items-center">Profile</h1>

        <div className="md:w-[40%] lg:w-[40%] border-[1px] shadow-md py-10 p-5 rounded-lg mb-[3rem] bg-[#EDEDED] flex items-center gap-[1.2rem]">
          <div className="flex items-center justify-center w-[5.2rem] h-[5.2rem] bg-gray-300 rounded-full">
            <img src={Camera} alt="Camera" width="40" />
          </div>
          <div className="form">
            <h2 className="md:text-lg text-sm lg:text-lg mb-1 text-black font-semibold">
              {profileData.name}
            </h2>
            <p>{profileData.email}</p>
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-2">Your schedules</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-6">
          {schedules.map((schedule, index) => (
            <Link
              to="/schedule"
              key={index}
              className="bg-[#1A6400] shadow-md text-white p-2 px-6 rounded flex justify-between items-center"
            >
              <div>
                <span>{schedule.name}</span>
                <span>({schedule.duration})</span>
              </div>
              <p>{">"}</p>
            </Link>
          ))}
        </div>

        <h3 className="text-lg font-semibold mb-2">Get more schedule</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 mb-6">
          <button
            onClick={handleClick}
            className="bg-[#604720] shadow-md text-white font-bold py-2 px-4 rounded transition-transform transform hover:translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            GET CUSTOMIZED SCHEDULE
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
