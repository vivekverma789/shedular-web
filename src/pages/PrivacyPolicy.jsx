import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <>
      <Navbar />
      <div className=" flex items-center justify-center p-4">
        <div className="bg-white w-full p-6 space-y-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </div>

          <div className="space-y-4 text-sm">
            <p>
              Welcome to our Privacy Policy page. We are committed to protecting
              your personal information and your right to privacy.
            </p>
            <h2 className="text-lg font-semibold">Information We Collect</h2>
            <p>
              We collect personal information that you provide to us such as
              name, address, contact information, passwords and security data,
              and payment information.
            </p>
            <h2 className="text-lg font-semibold">
              How We Use Your Information
            </h2>
            <p>
              We use personal information collected via our website for a
              variety of business purposes described below. We process your
              personal information for these purposes in reliance on our
              legitimate business interests, in order to enter into or perform a
              contract with you, with your consent, and/or for compliance with
              our legal obligations.
            </p>
            <h2 className="text-lg font-semibold">
              Will Your Information Be Shared With Anyone?
            </h2>
            <p>
              We only share information with your consent, to comply with laws,
              to provide you with services, to protect your rights, or to
              fulfill business obligations.
            </p>
            <h2 className="text-lg font-semibold">
              How Long Do We Keep Your Information?
            </h2>
            <p>
              We keep your information for as long as necessary to fulfill the
              purposes outlined in this privacy policy unless otherwise required
              by law.
            </p>
            <h2 className="text-lg font-semibold">
              How Do We Keep Your Information Safe?
            </h2>
            <p>
              We aim to protect your personal information through a system of
              organizational and technical security measures.
            </p>
          </div>

          <div className="flex justify-end">
            <button onClick={handleClick} className="hover:bg-[#202844] text-white px-4 py-2 rounded bg-[#364374] transition duration-300">
              Agree and Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
