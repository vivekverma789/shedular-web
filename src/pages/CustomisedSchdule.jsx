import React, { useEffect } from "react";
import SuggestedCourse from "../components/SuggestedCourse";
import Navbar from "../components/Navbar";
import { useLocation } from "react-router-dom";

const CustomisedSchdule = () => {
  const location = useLocation();
  const { submissionData } = location.state || {}; // Default to {} if location.state is undefined
  console.log(submissionData)
  useEffect(() => {
    if (!submissionData) {
      console.error("No selected options were provided!");
    } else {
      console.log("Selected Options:", submissionData);
    }
  }, [submissionData]);

  return (
    <>
      <Navbar />
      <div className="schedule-container">
        <SuggestedCourse selectedOptions={submissionData} />
      </div>
    </>
  );
};

export default CustomisedSchdule;
