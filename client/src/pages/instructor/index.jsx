import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/AuthStore/authStore";

// React Icons
import {
  FaBars,
  FaBook,
  FaBell,
  FaPlusCircle,
  FaUserGraduate,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import Avatar from "../../assets/avatar.jpg"; // placeholder profile image

const InstructorDashboard = () => {
  const { user, logout } = useAuthStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
  };

  const menuItems = [
    { icon: <FaBars className="w-6 h-6" />, label: "Dashboard", path: "." },
    { icon: <FaBook className="w-6 h-6" />, label: "Courses", path: "courses" },
    { icon: <FaPlusCircle className="w-6 h-6" />, label: "Add Course", path: "create-course" },
    { icon: <FaUserGraduate className="w-6 h-6" />, label: "New Student", path: "new-student" },
    { icon: <FaBell className="w-6 h-6" />, label: "Notifications", path: "notifications" },
  ];

  const headerItems = [
    {
      label: "Profile",
      icon: <FaUser className="w-5 h-5" />,
      onClick: () => {
        setDropdownOpen(false);
        navigate("profile");
      },
    },
    {
      label: "Settings",
      icon: <FaCog className="w-5 h-5" />,
      onClick: () => console.log("Go to settings"),
    },
    {
      label: "Logout",
      icon: <FaSignOutAlt className="w-5 h-5" />,
      onClick: handleLogout,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="h-14 flex items-center justify-between border-b border-gray-300 shadow px-4 lg:px-6 bg-white">
        <Link to="/" className="flex items-center">
          <span className="logo font-extrabold text-[#2578c6] text-5xl">
            Aluno
          </span>
        </Link>

        {/* Profile dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={Avatar}
              alt="User avatar"
              className="w-8 h-8 rounded-full border"
            />
            <span className="hidden lg:inline text-sm text-black font-medium">
              {user?.name || "Instructor"}
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border shadow-md rounded z-50 p-2 flex flex-col gap-2">
              {headerItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="flex flex-row items-center gap-3 px-4 py-2 rounded text-black hover:bg-[#80B8EC]"
                >
                  {item.icon}
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-20 md:w-64 bg-white border-r shadow-md">
          <nav className="p-2 md:p-4 flex flex-col gap-2">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 px-2 md:px-4 py-2 rounded text-black hover:bg-blue-200"
              >
                {item.icon}
                <span className="text-xs md:text-base hidden md:inline">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Render routed component */}
        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default InstructorDashboard;
