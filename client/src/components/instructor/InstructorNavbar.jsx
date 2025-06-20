import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaChalkboardTeacher } from "react-icons/fa";

const StudentHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-black z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold logo">
          Aluno
        </h1>

        {/* Navigation Items */}
        <ul className="flex items-center gap-6 text-sm sm:text-base md:text-lg font-medium">
          {/* Dashboard */}
          <li className="flex items-center gap-2 hover:underline">
            <FaTachometerAlt className="text-blue-600" />
            <Link to="/instructor/dashboard" className="hidden sm:inline">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StudentHeader;
