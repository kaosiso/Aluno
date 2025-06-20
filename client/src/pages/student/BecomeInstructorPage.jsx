// src/components/student/BecomeInstructorPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroImage from "../../assets/Hero.jpg";
import toast from "react-hot-toast";

const BecomeInstructorPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleBecomeInstructor = async () => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/instructor/become-instructor",
        {},
        { withCredentials: true }
      );

      if (response.data.success) {
        toast.success(response.data.message);
        // Use one redirect only
        window.location.href = "/instructor/dashboard";
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  const cancelRequest = () => {
    navigate("/");
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-gray-50 p-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <h2 className="text-3xl font-bold mb-4 text-white drop-shadow">
        Become an Instructor?
      </h2>
      <p className="text-center mb-6 max-w-md text-white drop-shadow">
        By becoming an instructor, you’ll gain access to tools for creating and
        managing your own courses and students.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={cancelRequest}
          className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-500 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleBecomeInstructor}
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Processing..." : "Confirm"}
        </button>
      </div>
    </div>
  );
};

export default BecomeInstructorPage;
