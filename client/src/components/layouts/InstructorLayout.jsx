// src/components/layouts/InstructorLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const InstructorLayout = () => {
  return (
    <div>
      {/* <header className="h-14 px-4 flex items-center bg-gray-800 text-white shadow">
        <Link to="/instructor/dashboard" className="text-xl font-bold">Instructor Panel</Link>
      </header> */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default InstructorLayout;
