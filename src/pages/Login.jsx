import React, { useState } from "react";
import logo from "../assets/logo.png";
import google from "../assets/google.png";
import "../components/navbar.css";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import api from "../apiConfig/apiConfig";
const Login = () => {
  const navigate = useNavigate();
   
  const handleBack = () => {
    navigate("/");
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    const { credential } = credentialResponse;

    try {
      const response = await api.post("/auth/google", { token: credential }); // Use api instance
      const data = response.data;

      console.log(data);

      if (data.success) {
        // Store token in localStorage
        localStorage.setItem("authToken", data.authToken);
        alert("Login successful!");

        // Navigate to dashboard or any protected route
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Google Login Error:", error.message);
      alert("Google login failed. Please try again.");
    }
  };

  
  
  const handleGoogleFailure = (error) => {
    console.error("Google Login Failed:", error);
  };

  return (
    <GoogleOAuthProvider clientId="811124239471-8qqo79nvq6854a868mtphdslnutlsnce.apps.googleusercontent.com">
      <div className="form flex justify-center items-center h-screen bg-gray-200">
        <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-sm">
          <div className="flex justify-end">
            <button onClick={handleBack} className="text-gray-500 text-xl">&times;</button>
          </div>
          <div className="text-center mb-8">
            <img src={logo} alt="Scheduler" className="mx-auto mb-2" />
            <h2 className="heading text-xl font-bold text-[#1A6400]">Scheduler</h2>
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
