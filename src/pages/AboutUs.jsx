import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-white mt-6 px-6 mb-5">
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            We are a company dedicated to delivering exceptional solutions
            tailored to meet the needs of our clients. With a passionate team
            and a commitment to innovation, we strive to provide high-quality
            services that transform businesses.
          </p>
        </div>
      </div>

      {/* About the Company Section */}
      <div className=" px-6 bg-white rounded-lg mb-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          About the Company
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Founded in [Year], our company has been at the forefront of delivering
          innovative business solutions to a global clientele. Over the years,
          we have expanded our expertise across various industries, building
          long-lasting relationships with our clients. With a focus on quality,
          reliability, and customer satisfaction, we aim to solve real-world
          challenges with cutting-edge technology and personalized approaches.
        </p>
      </div>

      {/* Mission Section */}
      <div className="px-6 bg-white rounded-lg mb-5">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is to empower businesses with the tools and insights they
          need to succeed in an ever-evolving digital world. We believe in
          innovation, dedication, and customer satisfaction. Our goal is to
          foster growth, both for our clients and within our team, as we
          continue to develop cutting-edge solutions that drive progress.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          We are committed to integrity, excellence, and collaboration. Through
          these core values, we aim to leave a positive impact on the businesses
          we serve and the communities we touch.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
