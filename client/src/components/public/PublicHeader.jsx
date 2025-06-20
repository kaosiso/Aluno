import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const PublicHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      label: "Browse Courses 📚",
      to: "/",
      className: "bg-gray-200 text-blue-600 px-2 py-2 rounded-md hover:bg-gray-300",
    },
    { label: "Pricing", to: "/pricing" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    {
      label: "Get Started",
      to: "/login",
      className:
        "bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/60 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold logo">
          AlunoP
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex ml-6 gap-10 text-sm sm:text-base md:text-lg font-medium items-center">
          {navLinks.map(({ label, to, className }) => (
            <li key={label}>
              <Link
                to={to}
                className={`hover:underline ${
                  className || "transition"
                } ${location.pathname === to ? "underline" : ""}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-9 h-9 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-6 items-center backdrop-blur-md bg-white/80 text-black p-4 transition-all duration-300">
          {navLinks.map(({ label, to, className }) => (
            <li key={label}>
              <Link
                to={to}
                onClick={toggleMenu}
                className={`text-base ${className || "hover:underline"}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default PublicHeader;
