import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

const dummyData = {
  schedules: [
    { id: 1, name: "SSC CGL PRE", duration: "3 months" },
    { id: 2, name: "SSC CGL PRE", duration: "3 months" },
    { id: 3, name: "SSC CGL PRE", duration: "3 months" },
  ],
  experts: [
    {
      id: 1,
      name: "Rohan Gupta",
      degree: "B.Tech, IIT Jodhpur",
      description:
        "Rohan Gupta has honed his skills in various exams. Currently he is...",
    },
    {
      id: 2,
      name: "Mohan Lal",
      degree: "B.Tech, IIT Kanpur",
      description:
        "Mohan Lal has honed his skills in various exams. Currently he is...",
    },
    {
      id: 3,
      name: "Sumit Anuragi",
      degree: "B.Tech, IIT Delhi",
      description:
        "Sumit Anuragi has honed his skills in various exams. Currently he is...",
    },
    {
      id: 4,
      name: "Arpita Panda",
      degree: "B.Tech, NIT Jammu",
      description:
        "Arpita Panda has honed his skills in various exams. Currently he is...",
    },
  ],
  communityInsights: [
    {
      id: 1,
      name: "Rohan Gupta",
      degree: "B.Tech, IIT Jodhpur",
      description:
        "Rohan Gupta has honed his skills in various exams. Currently he is...",
    },
    {
      id: 2,
      name: "Rohan Gupta",
      degree: "B.Tech, IIT Jodhpur",
      description:
        "Rohan Gupta has honed his skills in various exams. Currently he is...",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      degree: "B.Tech, IIT Jodhpur",
      description:
        "Rohan Gupta has honed his skills in various exams. Currently he is...",
    },
  ],
};

const ScheduleButton = ({ name, duration }) => (
  <Link to="/schedule" className="bg-[#1A6400] text-white shadow text-sm py-2 px-4 rounded-md mb-2 w-full text-left flex justify-between items-center">
    <span>
      {name} ({duration})
    </span>
    <span>&gt;</span>
  </Link>
);

const ExpertCard = ({ name, degree, description, isHighlighted }) => (
  <div
    className={`p-4 rounded-lg shadow hover:bg-[#8C7147] hover:text-white bg-teal-100 cursor-pointer animate-fadeIn}`}
  >
    <div className="flex items-center mb-2">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm">{degree}</p>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  </div>
);

const CommunityInsightCard = ({ name, degree, description }) => (
  <div className="bg-white p-4 rounded-lg shadow animate-fadeIn">
    <div className="flex items-center mb-2">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div>
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm">{degree}</p>
      </div>
    </div>
    <p className="text-sm">{description}</p>
  </div>
);

const SchedulesExpertsCommunity = () => {
  const navigate = useNavigate()
  const handleForm = () => {
    navigate("/form");
  };
  return (
    <div className="container mx-auto p-4 md:px-[4rem] lg:px-[4rem] animate-fadeIn">
      <section className="mb-8">
        <h2 className="text-lg font-medium mb-4">Your Schedules</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
          {dummyData.schedules.map((schedule) => (
            <ScheduleButton
              key={schedule.id}
              name={schedule.name}
              duration={schedule.duration}
            />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-4">How it works?</h2>
        <div className="rounded-lg bg-[#d9d9d9] p-6 max-w-md ">
          <div className="flex w-full items-center justify-between  p-4">
            {/* Step 1 */}
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-sm mt-2">Step 1</span>
                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>

                <span className="text-xs text-gray-500 text-center">
                  Asses yourself
                </span>
              </div>

              {/* Line */}
              <hr className="h-[0.9px] bg-black w-[4rem] rounded" />
            </div>

            {/* Step 2 */}
            <div className="flex w-full justify-center items-center">
              <div className="flex flex-col gap-2 items-center">
                <span className="text-sm mt-2">Step 2</span>
                <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>

                <span className="text-xs text-center text-gray-500">
                  Get customized schedule
                </span>
              </div>

              {/* Line */}
              <hr className="h-[0.9px] bg-black w-[4rem] rounded" />
            </div>
            {/* Step 3 */}
            <div className="flex flex-col gap-2 items-center">
              <span className="text-sm mt-2">Step 3</span>

              <div className="w-3 h-3 border-2 border-gray-400 rounded-full"></div>

              <span className="text-xs text-gray-500 text-center">
                Progress with us
              </span>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={handleForm}
              className="bg-[#AC926A] border-[2.5px] border-[white] text-white font-bold py-2 px-4 rounded transition-transform transform hover:translate-y-1 hover:scale-105 duration-100 ease-in-out"
            >
              GET CUSTOMIZED SCHEDULE
            </button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-medium mb-4">Meet our experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dummyData.experts.map((expert, index) => (
            <ExpertCard
              key={expert.id}
              name={expert.name}
              degree={expert.degree}
              description={expert.description}
            />
          ))}
        </div>
      </section>

      <section className="mb-[5rem]">
        <h2 className="text-lg font-medium mb-4">Community insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {dummyData.communityInsights.map((insight) => (
            <CommunityInsightCard
              key={insight.id}
              name={insight.name}
              degree={insight.degree}
              description={insight.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SchedulesExpertsCommunity;
