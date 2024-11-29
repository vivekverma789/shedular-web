import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import aboutUs from "../assets/aboutUs.png";
import avatar from "../assets/avatar.png";
import feedback from "../assets/feedback.png";
import logout from "../assets/logout.png";
import hiring from "../assets/hiring.png";
import support from "../assets/support.png";
import transfer from "../assets/transfer.png";
import user from "../assets/user.png";
import hamburger from "../assets/hamburger.png";
import arrow from "../assets/arrows.png";
import arrowWhite from "../assets/arrows-white.png";
import ibps from "../assets/ibps.png";
import railways from "../assets/rail.png";
import ssc from "../assets/SSC.png";

import "./navbar.css";

const Navbar = ({ onExpertsClick, onScheduleClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Hamburger menu state

  const location = useLocation(); // Get the current path

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
console.log(location.pathname)
  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`flex ${location.pathname ==="/" ? "bg-[#36332F80]  bg-opacity-50 absolute text-white": "block text-[#364374" } w-full justify-between items-center py-2 px-6`}>
      {/* Left Section - Logo and Slogan */}
      <div  className="flex gap-2">
        {location.pathname ==="/" && <div className="flex justify-center items-center">
          <img className="" src={ssc} alt="ssc"/>
          <img src={ibps} alt="ibps" />
          <img src={railways} alt="railways" />
        </div>}
        <div className="flex flex-col items-center justify-center">
          <Link to="/">
            <div className="flex gap-1">
            <h1 className={`${location.pathname === "/" ? " text-white": "text-[#364374" } heading text-2xl font-bold`} >Scheduler</h1>
              <img
                src={location.pathname === "/" ?arrowWhite : arrow}
                alt="Arrow"
                className="w-full h-full object-cover"
              />
            </div>
          </Link>
          <p className={`text-[0.8rem] ${location.pathname === "/" ? " text-white": "text-[#364374" }`}>
            One stop solution for Gov jobs
          </p>
        </div>
      </div>

      {/* Right Section - Links and User Icon */}
      {location.pathname ==="/" && <>
      <div className="hidden links md:flex lg:flex items-center space-x-8 relative">
      <Link 
        to="/"
      >
      <button
          onClick={onExpertsClick}
          className={`links ${
            location.pathname === "/" ? " text-white hover:text-gray-200" : "text-[#364374 hover:text-blue-900"
          } ${
            isActive("/our-experts") ? "underline font-bold" : ""
          } drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] heading`}
        >
          Our IITian Experts
        </button>
        </Link>
        <Link
          to="/transfers"
          className={`links ${location.pathname === "/" ? " text-white hover:text-gray-200": "text-[#364374 hover:text-blue-900" } ${
            isActive("/transfers") ? "underline font-bold" : ""
          } drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] heading`}
        >
          Mutual Transfers
        </Link>
        <Link
          onClick={onScheduleClick}
          to="/"
          className={`links ${location.pathname === "/" ? " text-white hover:text-gray-200": "text-[#364374 hover:text-blue-900" } ${
            isActive("/schedules") ? "underline font-bold" : ""
          } drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] heading`}
        >
          <h3 className="">Your Schedules</h3>
        </Link>

        {/* User Icon */}
        <div className="relative">
          <div
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={toggleDropdown}
          >
            <img
              src={user}
              alt="User Icon"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[13rem] bg-white border py-3 border-gray-200 rounded shadow-lg z-10">
              <Link
                to="/profile"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={avatar} className="mr-2" alt="Profile" /> Profile
              </Link>
              <Link
                to="/search-schedules"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={hiring} className="mr-2" alt="Search Schedules" />{" "}
                Explore Schedules
              </Link>
              <Link
                to="/mutual-matches"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={transfer} className="mr-2" alt="Mutual Matches" />{" "}
                Mutual matches
              </Link>
              <Link
                to="/contact"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={support} className="mr-2" alt="Contact Us" /> Contact
                us
              </Link>
              <Link
                to="/feedback"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={feedback} className="mr-2" alt="Feedback" /> Your
                feedback
              </Link>
              <Link
                to="/login"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={logout} className="mr-2" alt="Sign Out" /> Login
              </Link>
              <hr />
              <Link
                to="/hiring"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={hiring} className="mr-2" alt="We are hiring" /> We are
                hiring
              </Link>
              <Link
                to="/about-us"
                className="flex gap-2 items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" /> About us
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="block z-12 md:hidden lg:hidden">
        <img
          src={hamburger}
          alt="hamburger"
          onClick={toggleMobileMenu}
          className="cursor-pointer opacity-80 hover:opacity-100"
        />
      </div>

      {isMobileMenuOpen && (
        <div className="flex lg:hidden flex-col animate-fadeIn absolute items-end md:hidden inset-0 bg-black bg-opacity-20 z-20 h-screen space-y-3">
          <div className="bg-white absolute top-0 p-4 bottom-0 w-[85%] rounded-md">
            <div className="flex justify-between items-end w-full">
              <div></div>
              <div
                onClick={toggleMobileMenu}
                className="rounded-full h-5 w-5 border-black cursor-pointer border-2 flex justify-center items-center p-4 font-bold text-2xl"
              >
                X
              </div>
            </div>
            <div className="flex flex-col space-y-6 text-md">
              <Link
                to="/our-experts"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" /> Our IITian
                Experts
              </Link>
              <Link
                to="/transfers"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" />
                Mutual Transfers
              </Link>
              <Link
                to="/schedules"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" />
                Your Schedules
              </Link>
              <Link
                to="/profile"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={avatar} className="mr-2" alt="Profile" /> Profile
              </Link>
              <Link
                to="/search-schedules"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={hiring} className="mr-2" alt="Search Schedules" />{" "}
                Explore Schedules
              </Link>
              <Link
                to="/mutual-matches"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={transfer} className="mr-2" alt="Mutual Matches" />{" "}
                Mutual matches
              </Link>
              <Link
                to="/contact"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={support} className="mr-2" alt="Contact Us" /> Contact
                us
              </Link>
              <Link
                to="/feedback"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={feedback} className="mr-2" alt="Feedback" /> Your
                feedback
              </Link>
              <Link
                to="/login"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={logout} className="mr-2" alt="Sign Out" /> Login
              </Link>
              <hr />
              <Link
                to="/hiring"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={hiring} className="mr-2" alt="We are hiring" /> We are
                hiring
              </Link>
              <Link
                to="/about-us"
                className="flex gap-2 items-center text-[#364374] hover:text-blue-900"
              >
                <img src={aboutUs} className="mr-2" alt="About Us" /> About us
              </Link>
            </div>
          </div>
        </div>
      )}
      </>}
    </nav>
  );
};

export default Navbar;
