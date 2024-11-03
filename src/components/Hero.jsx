import React, { useEffect, useState } from "react";
import User from "../assets/hero.png";
import "./navbar.css";
import background from "../assets/bg.png";
import { useNavigate } from "react-router-dom";
import progress from "../assets/progress.png";
import analytics from "../assets/analytics.png";
import schedule from "../assets/schedule.png";

export default function Hero() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const handleForm = () => {
    console.log("hekf[owjp");
    navigate("/form");
  };

  return (
    <div
      className="flex items-center justify-center h-screen inset-0 -z-10"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        zIndex: "-10"
      }}
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center justify-between md:w-[75%] px-5 md:px-0 transform transition-all duration-1000 ease-in-out ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        {/* Text Section with Icons */}
        <div className="hero-content text-center md:text-left space-y-10 text-white mb-10 md:mb-0">
          <ul className="space-y-4 list-none pl-0">
            <li className="flex gap-4 text-2xl items-center">
              <img src={analytics} alt="Assess" className="w-10 h-10 mr-3" />
              Assess yourself
            </li>
            <li className="flex text-2xl gap-4 items-center">
              <img src={schedule} alt="Schedule" className="w-10 h-10 mr-3" />
              Pick your schedule
            </li>
            <li className="flex text-2xl gap-4 items-center">
              <img src={progress} alt="Progress" className="w-10 h-10 mr-3" />
              Progress with us
            </li>
          </ul>
          <button
            onClick={handleForm}
            className="bg-[#1A6400] border-[2.5px] border-[white] text-white font-bold py-2 px-6 rounded transition-transform transform hover:translate-y-1 hover:scale-105 duration-300 ease-in-out"
          >
            GET CUSTOMIZED SCHEDULE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 flex justify-center">
          {/* You can place any additional content or images here */}
        </div>
      </div>
    </div>
  );
}
