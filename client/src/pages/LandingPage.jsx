import React, { useState } from 'react';

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';
import { LuSparkles } from 'react-icons/lu';
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

console.log("🚀 what to do next");

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true); 
    } else {
      navigate("/dashboard");
    }
  };
  console.log("Modal open?", openAuthModal);


  return (
    <>
    <div className="w-full min-h-full bg-[#ddcc98]">  {/* Blurred Background */}
      <div className="w-full h-full bg-gradient-to-b from-[#f4ebd5] via-[#e9dba2] to-[#ddcc89]">  {/* Main Content */}
        
        <div className="container mx-auto px-4 pt-6 pb-4 relative z-10">
          { /* Header */ }
          <header className="flex justify-between items-center mb-17">
            <div className="text-2xl text-black font-bold">
              Interview Prep AI 
            </div>
            {user ? (
              <ProfileInfoCard /> 
            ) : (
              <button
                className="text-sm font-semibold px-9 py-4.5 rounded-full bg-red-900 bg-opacity-40 text-white border border-white border-opacity-40 hover:bg-opacity-90 hover:border-opacity-90 hover:text-white transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-900"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button> 
            )}
          </header>

          { /* Hero Content */ }
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left md-2">
                <div className="flex items-center gap-2 text-[13px] text-[#3D348B] font-semibold bg-[#FBBE72] px-3 py-1 rounded-full border border-[#F7D488]">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-4xl text-black font-semibold mb-6 leading-tight">
                Ace Interviews with <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_brown_0%,_red__100%)] bg-[length:200%_200%] animate-text-shine font-semibold">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="w-full md:w-1/2">
              <p className="text-[17px] text-gray-900 font-semibold mr-0 md:mr-20 mb-9">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is 
                here.
              </p>

              <button
                className="bg-black text-sm font-semibold text-white px-9 py-4.5 rounded-full hover:bg-yellow-100 hover:text-black border border-yellow-40 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full min-h-full relative z-11 mt-4">
      <div>
        <section className="flex items-center justify-center mt-11 mb-4">
          <img
            src={HERO_IMG}
            alt="Hero Image"
            className="w-[80vw] rounded-lg shadow-lg"
            />
        </section>
      </div>
        </div>
      </div>
    </div>

     
      <div className="w-full min-h-full bg-[#eae4ca] mt-4">
        <div className="container mx-auto px-4 pt-10 pb-20">
          <section className="mt-4">
            <h2 className="text-amber-900 text-2xl font-medium text-center mb-12">
              Shine With Smart Tool
            </h2>

            <div className="flex flex-col items-center gap-9">
              { /* First 3 cards */ }
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9 w-full">
                { APP_FEATURES.slice(0, 3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFF9F4] p-9 rounded-xl shadow-xs hover:shadow-lg shadow-[#F7D488] transition border border-[#F7D488]"
                  >
                    <h3 className="text-base font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-900">{feature.description}</p>
                  </div>  
                ))}
              </div>

              { /* Remaining 3 cards */ }
              <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
                { APP_FEATURES.slice(3).map((feature) => (
                  <div
                    key={feature.id}
                    className="bg-[#FFF9F4] p-9 rounded-xl shadow-xs hover:shadow-lg shadow-[#F7D488] transition border border-[#F7D488]"
                  >
                    <h3 className="text-base font-semibold mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-900">{feature.description}</p>
                  </div>  
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="text-sm bg-[#FFFEF4] text-secondary text-center p-4 mt-4">
        💻Built with happy coding for smarter faster interview success🎯
      </div>
     </div>

      <Modal
          isOpen={openAuthModal}
          onClose={() => {
            setOpenAuthModal(false);
            setCurrentPage("login");
          }}
          hideHeader
        >
          <div>
            {currentPage === "login" && (
              <Login setCurrentPage={setCurrentPage} />
            )}
            {currentPage === "signup" && (
              <SignUp setCurrentPage={setCurrentPage} /> 
            )}
          </div>
        </Modal>
    </>
  );
};

export default LandingPage;



