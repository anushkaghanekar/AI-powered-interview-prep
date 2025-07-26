import React, { useState } from 'react';

import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {};

  return (
    <div className="relative w-full min-h-screen bg-[#FFFCEF] overflow-hidden">
       {/* Blurred Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-amber-200/30 blur-[-10px] z-0">
        {/* Main Content */}

        <div className="relative z-10 px-10 py-10 w-full flex flex-col items-start ">
          { /* Header */ }
          <header className="flex justify-between items-center mb-10">
            <div className="text-2xl text-black font-bold">
              Interview Prep AI 
            </div>
              <button
                className="bg-orange-400 text-white px-5 py-2 rounded-full hover:bg-orange-500"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
          </header>

          { /* Hero Content */ }
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-left md-2">
                <div className="text-xl font-medium">
                  AI Powered
                </div>
              </div>

              <h1 className="text-4xl font-bold leading-snug">
                Ace Interviews with <br />
                <span className="text-orange-500">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            <div className="">
              <p className="text-lg text-gray-800 max-w-2xl">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
                From preparation to mastery - your ultimate interview toolkit is 
                here.
              </p>

              <button
                className="bg-orange-400 text-white px-6 py-3 rounded-full hover:bg-orange-500"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
