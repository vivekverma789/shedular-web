import React, { useState, useEffect } from "react";
import api from "../apiConfig/apiConfig";

const LeaveForm = ({ onClose, goalId, maxLeaves, remainingLeaves, onLeaveSubmitted }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [leaves, setLeaves] = useState([]); // State to hold the leaves fetched from server

  useEffect(() => {
    // Fetch user's taken leaves when the component is mounted
    const fetchLeaves = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await api.get("/leaves", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLeaves(response.data.leavesTaken);
      } catch (error) {
        console.error("Error fetching leaves:", error);
      }
    };

    fetchLeaves();
  }, []);

  const deleteLeave = async (leaveId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await api.delete(
        `/course-content/${goalId}/cancel-leave/${leaveId}`,  // Add leaveId to URL
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      setLeaves((prevLeaves) => prevLeaves.filter((leave) => leave._id !== leaveId));
      onLeaveSubmitted(response.data.remainingLeaves); // Update the remaining leaves
    } catch (error) {
      console.error("Error deleting leave:", error);
    }
  };

  const calculateLeaveDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const leaveDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
    return leaveDays;
  };

  const isValidDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= today;
  };

  const handleSubmit = async () => {
    if (!isValidDate(startDate)) {
      setError("Start date must be today or a future date.");
      return;
    }
    if (!isValidDate(endDate)) {
      setError("End date must be today or a future date.");
      return;
    }

    const leaveDays = calculateLeaveDays();
    if (leaveDays > remainingLeaves) {
      setError("Leave request exceeds remaining leaves.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await api.post(
        `/course-content/${goalId}/request-leave`,
        { startDate, endDate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onLeaveSubmitted(response.data.remainingLeaves);
      onClose();
    } catch (error) {
      setError("Error submitting leave request.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[24rem] max-w-full">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Request Leave</h2>
        <p className="text-gray-600 mb-4">
          Maximum Leaves: {maxLeaves}, Remaining Leaves: {remainingLeaves}
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Display leaves taken */}
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-700">Your Taken Leaves</h3>
          {leaves.length > 0 ? (
            <ul>
              {leaves.map((leave) => (
                <li key={leave._id} className="flex justify-between items-center mb-2">
                  <span>{new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()} - {leave.days}days</span>
                  <button
                    onClick={() => deleteLeave(leave._id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No leaves taken yet.</p>
          )}
        </div>

        {/* Leave Request Form */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
          >
            Submit
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveForm;
