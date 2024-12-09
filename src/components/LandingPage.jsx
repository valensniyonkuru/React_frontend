import React from "react";
import BackgroundImage from "../assets/back.jpeg"; // Import the image

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-sky-100 px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
              Empower your Mind!
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              Accessible mental health support for everyone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start">
              <button className="px-8 py-4 rounded-full bg-blue-500 text-white text-lg font-medium hover:bg-blue-600 transition duration-300">
                Explore
              </button>
              <div className="mt-4 sm:mt-0 sm:ml-4 text-gray-600 flex items-center">
                <img
                  src="https://randomuser.me/api/portraits/women/75.jpg"
                  alt="User 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User 2"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                />
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="User 3"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-2"
                />
                <p className="ml-4 text-sm font-medium">
                  100K people have joined
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            <div className="relative shadow-xl rounded-lg overflow-hidden">
              <img
                src={BackgroundImage} // Use the imported image here
                alt="Background"
                className="w-full rounded-lg"
              />
            </div>
            {/* Floating Feedback */}
            <div>
              
                
                
                
              
              <div>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
