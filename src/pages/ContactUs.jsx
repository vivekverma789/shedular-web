import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../components/navbar.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex flex-col bg-[#D9D9D9] h-screen">
      <div className="bg-white">
      <Navbar />
      </div>
      
      <div className="mt-[5rem]">
        <div className="bg-white shadow-md rounded-lg grid grid-cols-2 gap-[2rem] p-8 max-w-5xl w-full mx-auto">
          <div className="flex flex-col ">
            {/* Optional: Add the image icon if needed */}
            <h2 className="text-2xl font-bold form">We are here to help!</h2>
            <p className="form mt-4 text-[#604720] text-md">
              Let us know, how we can best serve you. Use the contact form to
              Email us. It’s an honour to support you in your journey towards
              better education.
            </p>
          </div>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              placeholder="Contact number"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <textarea
              name="comment"
              value={formData.comment}
              onChange={handleChange}
              placeholder="Comment"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className=" bg-[#604720] text-white font-bold py-2 px-4 rounded hover:bg-[#4e3711] transition duration-200"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
