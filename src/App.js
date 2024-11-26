// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Schedules from "./pages/Schedules";
import Form from "./pages/Form";
import CustomisedSchdule from "./pages/CustomisedSchdule";
import Profile from "./pages/Profile";
import Transfer from "./pages/Transfer";
import SSC from "./pages/SSC";
import Login from "./pages/Login";
import RRB from "./pages/RRB";
import Banking from "./pages/Banking";
import ProtectedRoute from "./pages/ProtectedRoute";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import OurCourses from "./pages/OurCourses";
import MutualMatches from "./pages/MutualMatches";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";
import Hiring from "./pages/Hiring";
import AboutUs from "./pages/AboutUs";
import Schedule from "./pages/Schedule";

const App = () => {
  return (
    <Router>
      <>
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/form" element={<Form />} />
          <Route path="/customised-schedule" element={<CustomisedSchdule />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/transfers" element={<Transfer />} />
          <Route path="/transfers/ssc" element={<SSC />} />
          <Route path="/transfers/rrb" element={<RRB />} />
          <Route path="/transfers/banking" element={<Banking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search-schedules" element={<OurCourses />} />
          <Route path="/mutual-matches" element={<MutualMatches />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/hiring" element={<Hiring />} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/schedule/:goalId" element={<Schedule />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
