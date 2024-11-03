import React, { useState } from "react";
import "../components/navbar.css";

const Hiring = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    highestDegree: "",
    fieldOfStudy: "",
    applyingRole: "",
    applyingExam: "",
    timesAppeared: "",
    preparedWith: "",
    employmentStatus: "",
    postDepartment: "",
    proofFile: null,
    resumeFile: null,
    experienceDetails: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add form submission logic here, like sending data to a backend server
  };

  return (
    <div className="form flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full mt-10 mb-10 max-w-3xl">
        <h2 className="form text-xl font-bold text-center mb-6">
          Application form for competitive exam schedule designers
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name and Email */}
          <div className=" form grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Mobile number and Highest Degree */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2">Mobile number *</label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">Highest Degree *</label>
              <select
                name="highestDegree"
                value={formData.highestDegree}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
          </div>

          {/* Field of Study and Applying Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2">Field of study *</label>
              <input
                type="text"
                name="fieldOfStudy"
                value={formData.fieldOfStudy}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2">
                Applying for the role of *
              </label>
              <select
                name="applyingRole"
                value={formData.applyingRole}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="Designer">Designer</option>
                <option value="Content Creator">Content Creator</option>
              </select>
            </div>
          </div>

          {/* Applying Exam and Times Appeared */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className=" mb-2">
                Applying for the exam *
              </label>
              <input
                type="text"
                name="applyingExam"
                value={formData.applyingExam}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-2">
                Times you appeared for this exam *
              </label>
              <input
                type="number"
                name="timesAppeared"
                value={formData.timesAppeared}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Prepared With and Employment Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className=" mb-2">
                Prepared with the help of *
              </label>
              <input
                type="text"
                name="preparedWith"
                value={formData.preparedWith}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-2">
                Current employment status *
              </label>
              <select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select</option>
                <option value="Employed">Employed</option>
                <option value="Unemployed">Unemployed</option>
                <option value="Student">Student</option>
              </select>
            </div>
          </div>

          {/* Post Department and Upload Proof */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className=" mb-2">
                Post and Department *
              </label>
              <input
                type="text"
                name="postDepartment"
                value={formData.postDepartment}
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className=" mb-2">Upload Proof *</label>
              <input
                type="file"
                name="proofFile"
                accept=".pdf,.jpg,.png"
                onChange={handleChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          {/* Attach Resume */}
          <div className="flex flex-col">
            <label className=" mb-2">
              Attach Resume (optional)
            </label>
            <input
              type="file"
              name="resumeFile"
              accept=".pdf,.docx"
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Experience Details */}
          <div className="flex flex-col">
            <label className=" mb-2">
              Relevant experience in exam coaching/content creation for this
              role (Provide in detail)
            </label>
            <textarea
              name="experienceDetails"
              value={formData.experienceDetails}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[179px] bg-[#8C7147] text-white p-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hiring;
