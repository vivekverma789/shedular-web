import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import editIcon from "../assets/editing.png";
import "../components/navbar.css";
import { FaTrash } from "react-icons/fa";

// Dummy data as if coming from backend
const fetchTransferProfile = () => {
  return {
    name: "Nadeem",
    position: "Accountant (CAG)",
    category: "General",
    currentPosting: "Gwalior (MP)",
    preferences: ["Jaipur", "Dehradun", "Chandigarh"],
  };
};

const fetchMatchingResults = () => {
  return [
    {
      name: "Rohan Kumar",
      position: "Accountant (CAG)",
      category: "OBC",
      currentPosting: "Chandigarh",
      phone: "9131778461",
      email: "rk17@gmail.com",
    },
    {
      name: "Rakesh",
      position: "Accountant (CAG)",
      category: "ST",
      currentPosting: "Dehradun",
      phone: "9876543210",
      email: "rkesh41@gmail.com",
    },
  ];
};

const TransferProfile = () => {
  const [profile, setProfile] = useState(null);
  const [matchingResults, setMatchingResults] = useState([]);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

  // Simulate fetching data from the backend on component mount
  useEffect(() => {
    const profileData = fetchTransferProfile();
    const resultsData = fetchMatchingResults();
    setProfile(profileData);
    setMatchingResults(resultsData);
  }, []);

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleCloseModal = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
  };

  const handleConfirmDelete = () => {
    // Handle the deletion logic here
    console.log("Profile deleted!");
    handleCloseModal();
  };

  return (
    <>
      <Navbar />
      <div className="px-[4rem]">
        <div className="w-full mt-4 max-w-5xl">
          {profile && (
            <>
              {/* Transfer Profile Section */}
              <div className="form mb-5 text-xl font-semibold">
                Your transfer profile
              </div>
              <div className="bg-[#EDEDED] shadow rounded-lg p-6 mb-8">
                <div className="flex items-center gap-2 justify-end">
                  <img src={editIcon} alt="edit Icon" />
                  <button
                    className="form text-sm text-[#364374] hover:underline flex items-center"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                  <>|</>
                  <div
                    className="form text-sm text-red-700 cursor-pointer hover:underline flex items-center"
                    onClick={handleDeleteClick}
                  >
                    <FaTrash className="mr-1" /> Delete
                  </div>
                </div>

                {/* Profile Details */}
                <div className="form font-semibold text-gray-700">
                  <p>{profile.name}</p>
                  <p>{profile.position}</p>
                  <p>Category: {profile.category}</p>
                  <p>Current posting: {profile.currentPosting}</p>
                  <div className="flex mt-4">
                    <p>Required Posting Preference: </p>
                    <p className="grid grid-cols-3 items-center w-[60%] justify-center justify-items-center">
                      {profile.preferences.map((preference, index) => (
                        <span
                          className="flex justify-center items-center"
                          key={index}
                        >
                          {index + 1}. {preference}{" "}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Matching Results Section */}
          <div>
            <h3 className="form text-xl font-semibold mb-4">
              Matching results
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {matchingResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-[#FEDDAB] form p-5 px-10 font-semibold text-sm rounded-lg shadow"
                >
                  <p>{result.name}</p>
                  <p>{result.position}</p>
                  <p>Category: {result.category}</p>
                  <p>Current posting: {result.currentPosting}</p>
                  <p>{result.phone}</p>
                  <p>{result.email}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for Editing Profile */}
          {isEditModalVisible && (
            <div className="absolute top-[15rem] right-[12rem]">
              <div className="bg-[#D9D9D9] p-4 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex justify-end">
                  <button className="font-bold" onClick={handleCloseModal}>
                    X
                  </button>
                </div>

                <p className="form mb-4">
                  Modifying your submission will incur a fee of ₹10.
                </p>
                <p className="mb-4 font-semibold">Do you wish to proceed?</p>
                <div className="flex justify-end gap-4 items-center">
                  <span className="text-md font-semibold">₹10</span>
                  <button className="bg-[#1A6400] text-white py-2 px-4 rounded hover:bg-green-700">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Modal for Delete Confirmation */}
          {isDeleteModalVisible && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-40">
              <div className="bg-[#FFEBEB] p-4 rounded-lg shadow-lg max-w-xs w-full">
                <div className="flex justify-end">
                  <button className="font-bold" onClick={handleCloseModal}>
                    X
                  </button>
                </div>

                <p className="form mb-4 py-4">
                  Are you sure you want to delete your profile?
                </p>
                <div className="flex justify-end gap-4 items-center">
                  <button
                    className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                    onClick={handleConfirmDelete}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-gray-300 py-2 px-4 rounded hover:bg-gray-400"
                    onClick={handleCloseModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TransferProfile;
