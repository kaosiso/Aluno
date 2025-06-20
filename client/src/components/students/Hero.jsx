import React from "react";
import HeroImage from "../../assets/Hero.jpg";
const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-blue-900 font-medium mb-4">
          Join Us Today & Learn Everyday
        </h2>
        <p className="mb-6 text-base sm:text-lg md:text-xl text-black">
          One of the fastest growing online learning platforms where you can
          have access to the brightest teachers in your academic field.
        </p>

        {/* Search Input */}
        <div className="flex items-stretch justify-center max-w-lg mx-auto">
          <input
            type="text"
            placeholder="What do you want to learn today?"
            className="w-full rounded-l-md text-black bg-white/30 placeholder-gray-700 focus:bg-white/70 focus:placeholder-transparent focus:outline-none px-4 py-3 text-lg sm:text-xl md:text-2xl transition duration-300"
          />
          <button className="bg-blue-600 text-white px-5 py-3 rounded-r-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Top Navbar - for demo purposes */}
    </section>
  );
};

export default Hero;
