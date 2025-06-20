import React from "react";
import { Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/AuthStore/authStore";
import StudentHeader from "../students/StudentNavbar";
import InstructorHeader from "../instructor/InstructorNavbar";
import PublicHeader from "../public/PublicHeader";
import Hero from "../../components/students/Hero";
import Footer from "../../components/students/Footer";
const MainLayout = () => {
  const { isAuthenticated, user } = useAuthStore();

  const renderHeader = () => {
    if (!isAuthenticated) return <PublicHeader />;
    if (user?.role === "student") return <StudentHeader />;
    if (user?.role === "instructor") return <InstructorHeader />;
    return null;
  };

  return (
    <div style={{ backgroundColor: "#FAFAFA" }}>
      <div className="fixed top-0 left-0 w-full z-50">{renderHeader()}</div>
      <Hero />
      <main className="min-h-screen bg-[#FAFAFA]">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default MainLayout;
