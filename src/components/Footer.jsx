import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Footer = () => {
  return (
    <footer className="bg-[#8C7147] text-white p-4 py-6">
      {/* Welcome Message Section */}
      <div className="text-center flex justify-center mb-4">
        <p className="text-lg max-w-5xl text-center flex">
          Welcome to our Ultimate Study Scheduler! Tailored for students
          preparing for competitive exams, our daily schedules help maximize
          productivity and efficiency. Stay organized and focused with our
          expertly crafted study plans and integrated resources. Start your
          journey to success today!
        </p>
      </div>
      <hr className="h-[2px] bg-opacity-50 w-full" />
      {/* Links Section */}
      <div className="pt-4">
        <ul className="heading flex justify-center space-x-8 text-xl">
          <li>
            <Link to="/privacy-policy" className="hover:underline">
              PRIVACY POLICY
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="hover:underline">
              ABOUT US
            </Link>
          </li>
        </ul>
      </div>
      <div style={{}} className="w-full mt-2 mb-0 flex justify-center text-sm items-center ">Designed by  © Vivek Verma</div>
    </footer>
  );
};

export default Footer;
