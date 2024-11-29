import { useState } from "react";
import "../components/navbar.css";
import { useLocation } from "react-router-dom";
import api from "../apiConfig/apiConfig";

const RRB = () => {
  const location = useLocation();
  const selectedOption = location.state?.selectedOption || "No option selected";
console.log(selectedOption)
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
    currentZone: "", // Added field
    currentDivision: "", // Added field
    desiredZone: "", // Added field
    desiredDivision: "", // Added field
    department: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "proofFile") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });
    formDataToSend.append("selectedGoal", selectedOption); // Add selected option to the form data

    try {
      const token = localStorage.getItem("authToken"); // Retrieve token from local storage

      const response = await api.post(
        "/mutual-transfer/save",
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
          Authorization: `Bearer ${token}`,
        }
      );
      alert("Form submitted successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting the form:", error.message);
      alert("There was an error submitting your form. Please try again.");
    }
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
              <label className="block text-sm text-gray-700">Department *</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              >
                <option value="">Select Department</option>
                <option value="Post 1">Post 1</option>
                <option value="Post 2">Post 2</option>
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
                Current zone *
              </label>
              <select
                name="currentZone"
                value={formData.currentZone}
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
                Current division *
              </label>
              <input
                name="currentDivision"
                value={formData.currentDivision}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Current posting station *
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
                Desired zone *
              </label>
              <input
                name="desiredZone"
                value={formData.desiredZone}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Desired division *
              </label>
              <input
                name="desiredDivision"
                value={formData.desiredDivision}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>
            <div className="flex text-sm gap-3 flex-col">
              <label className="block text-sm text-gray-700">
                Desired posting station(s) *
              </label>
              <input
                name="desiredPosting"
                value={formData.desiredPosting}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
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

export default RRB;
