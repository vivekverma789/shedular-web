import { useState } from "react";
import "../components/navbar.css";

const Banking = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    employeeNo: "",
    mobileNumber: "",
    email: "",
    category: "",
    post: "",
    currentPosting: "",
    desiredPosting: "",
    proofFile: null,
    additionalDetail: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "proofFile") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="form flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded shadow-md w-full mt-10 mb-10 max-w-3xl">
        <h2 className="form text-xl font-semibold mb-6">
          Personal information to find a good match
        </h2>
        <hr className="h-[1px] bg-gray-600 mb-5" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10">
            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">Full Name *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Employee Permanent No. *
              </label>
              <input
                type="text"
                name="employeeNo"
                value={formData.employeeNo}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Mobile Number *
              </label>
              <input
                type="tel"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="">Select Category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
              </select>
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">Post *</label>
              <select
                name="post"
                value={formData.post}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="">Select Post</option>
                <option value="Post 1">Post 1</option>
                <option value="Post 2">Post 2</option>
              </select>
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Current Posting *
              </label>
              <select
                name="currentPosting"
                value={formData.currentPosting}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="">Select Current Posting</option>
                <option value="Location 1">Location 1</option>
                <option value="Location 2">Location 2</option>
              </select>
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Desired Posting Preference(s) *
              </label>
              <select
                name="desiredPosting"
                value={formData.desiredPosting}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="">Select Desired Posting</option>
                <option value="Location A">Location A</option>
                <option value="Location B">Location B</option>
              </select>
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Upload Proof * (Gov ID/Salary slip/Appt letter)
              </label>
              <input
                type="file"
                name="proofFile"
                accept=".jpg,.pdf"
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
          </div>

          <div className="flex text-sm gap-3 flex-col">
            <label className="block text-sm text-gray-700">
              Additional Detail
            </label>
            <textarea
              name="additionalDetail"
              value={formData.additionalDetail}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              rows="4"
            ></textarea>
          </div>

          {/* <p className="text-xs text-center text-red-500">
            Please note, you can't modify the details once submitted.
          </p> */}

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[179px] bg-[#8C7147] text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banking;
