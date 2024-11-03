import React from "react";
import SchedulesExpertsCommunity from "../components/Courses";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Schedules = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <>
        <Navbar />
        <SchedulesExpertsCommunity />
      </>
      <Footer />
    </div>
  );
};

export default Schedules;
