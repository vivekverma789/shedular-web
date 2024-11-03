import React, { useState } from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import "../components/navbar.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mobile Number:", mobileNumber);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    // Send the token to the backend for verification and user login
    fetch("http://localhost:5000/api/auth/google", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: credentialResponse.credential }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // Redirect to the dashboard or any other page on success
          navigate("/dashboard");
        }
      })
      .catch((error) => console.error("Google Login Error:", error));
  };

  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="form flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
          <div className="flex justify-end">
            <button onClick={handleBack} className="text-gray-500 text-xl">&times;</button>
          </div>
          <div className="text-center mb-8">
            <img src={logo} alt="Scheduler" className="mx-auto mb-2" />
            <h2 className="heading text-xl font-bold text-[#1A6400]">Scheduler</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form text-sm">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Mobile Number
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-600">+91 |</span>
                <input
                  type="text"
                  value={mobileNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 10) {
                      setMobileNumber(value);
                    }
                  }}
                  maxLength={10}
                  pattern="\d{10}"
                  className="pl-14 py-2 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter mobile number"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-[#8C7147] text-sm text-white py-2 rounded transition duration-300"
            >
              Continue
            </button>
          </form>

          <div className="my-4 text-sm flex items-center justify-between">
            <hr className="w-full border-t border-gray-300" />
            <span className="mx-4 text-gray-500">OR</span>
            <hr className="w-full border-t border-gray-300" />
          </div>

          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
          />

          <p className="mt-4 text-[0.7rem] text-gray-500 text-center">
            By using Scheduler, you agree to our{" "}
            <a href="#" className="text-blue-500">Terms of use</a> and{" "}
            <a href="#" className="text-blue-500">Privacy policy</a>.
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
