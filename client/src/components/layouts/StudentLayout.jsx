// src/components/layouts/StudentLayout.jsx
import React from "react";
import { Outlet, Link } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;
