import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ScheduleComponent from "../components/ScheduleComponent";
import Footer from "../components/Footer";
import ExpertsCard from "../components/ExperCard";
import CommunityInsights from "../components/CommunityInsights";
import FAQ from "../components/FAQ";
import WhyUs from "../components/WhyUs";

const Home = () => {
  const expertsRef = useRef(null);

  const scheduleRef = useRef(null);
  const scrollToSchedule = () => {
    scheduleRef.current?.scrollIntoView({ behavior: "smooth" }); // Function to scroll to schedule
  };

  const scrollToExperts = () => {
    expertsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar onExpertsClick={scrollToExperts} onScheduleClick={scrollToSchedule} />
      <Hero />
      <section  ref={scheduleRef}>
        <ScheduleComponent />
      </section>
      <WhyUs />
      <section ref={expertsRef}>
        <ExpertsCard />
      </section>

      <CommunityInsights />
      <FAQ />
      <Footer />
    </>
  );
};

export default Home;
