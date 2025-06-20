import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StudentDashboardPage from "../../components/student/dashboard/StudentDashboardPage";
import StudentCourses from "../../components/student/courses/StudentCourses";
import StudentNotification from "../../components/student/Notification/StudentNotification";
import UserProfile from "../../components/student/user/UserProfile";

// React Icons
import { FaBars, FaBook, FaBell, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import Avatar from "../../assets/avatar.jpg"; // placeholder profile image

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    {
      icon: <FaBars className="w-6 h-6" />,
      label: "Dashboard",
      value: "dashboard",
      component: <StudentDashboardPage />,
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      label: "Courses",
      value: "courses",
      component: <StudentCourses />,
    },
    {
      icon: <FaBell className="w-6 h-6" />,
      label: "Notifications",
      value: "notifications",
      component: <StudentNotification />,
    },
  ];

  const headerItems = [
    {
      label: "Profile",
      icon: <FaUser className="w-5 h-5" />,
      onClick: () => {
        setActiveTab("profile");
        setDropdownOpen(false);
      },
    },
    {
      label: "Settings",
      icon: <FaCog className="w-5 h-5" />,
      onClick: () => {
        console.log("Go to settings");
      },
    },
    {
      label: "Logout",
      icon: <FaSignOutAlt className="w-5 h-5" />,
      onClick: () => {
        console.log("Logging out...");
      },
    },
  ];

  const currentComponent =
    activeTab === "profile"
      ? <UserProfile />
      : menuItems.find((item) => item.value === activeTab)?.component;

  return (
    <div className="flex flex-col min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="h-14 flex items-center justify-between border-b border-gray-300 shadow px-4 lg:px-6 bg-white">
        <Link to="/" className="flex items-center">
          <span className="logo font-extrabold text-[#2578c6] text-3xl">
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
              Kaosisochukwu
            </span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-44 bg-white border shadow-md rounded z-50 p-2 flex flex-col gap-2">
              {headerItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.onClick}
                  className="flex flex-row items-center gap-3 px-4 py-2 rounded text-black hover:bg-gray-100"
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
                key={item.value}
                onClick={() => setActiveTab(item.value)}
                className={`flex flex-col md:flex-row items-center md:items-start gap-1 md:gap-3 px-2 md:px-4 py-2 rounded text-black hover:bg-gray-100 ${
                  activeTab === item.value ? "bg-gray-200 font-semibold" : ""
                }`}
              >
                {item.icon}
                <span className="text-xs md:text-base hidden md:inline">
                  {item.label}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">{currentComponent}</main>
      </div>
    </div>
  );
};

export default StudentDashboard;
