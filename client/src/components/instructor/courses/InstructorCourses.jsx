import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InstructorCourses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Intro to Web Development",
      students: 120,
      revenue: "$1,200",
    },
    {
      id: 2,
      title: "React for Beginners",
      students: 95,
      revenue: "$950",
    },
  ]);

  const handleDeleteCourse = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-[#fafafa] min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h3 className="text-[1rem] sm:text-[2rem] font-semibold text-[#2578c6]">
          My Courses
        </h3>
        <button
          onClick={() => navigate("/instructor/create-new-course")}
          className="bg-[#2578c6] text-white px-3 py-2 sm:px-4 sm:py-2 text-[0.875rem] rounded hover:bg-blue-700"
        >
          <span className="sm:hidden">Add</span>
          <span className="hidden sm:inline">Add Course</span>
        </button>
      </div>

      {/* Mobile Card View */}
      <div className="space-y-4 sm:hidden flex flex-col items-center">
        {courses.length > 0 ? (
          courses.map((course) => (
            <div key={course.id} className="w-[95%] bg-white shadow-md rounded-lg p-4">
              <div className="text-sm font-medium text-gray-800">{course.title}</div>
              <div className="text-sm text-gray-600">Students: {course.students}</div>
              <div className="mt-2">
                <button
                  className="text-red-600 hover:text-red-800 text-sm"
                  onClick={() => handleDeleteCourse(course.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No courses found.</p>
        )}
      </div>

      {/* Desktop Table View */}
      <div className="hidden sm:block bg-white shadow-md rounded-lg p-4">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-3 w-1/2 text-[0.875rem]">Course Title</th>
              <th className="px-4 py-3 w-1/4 text-[0.875rem]">Students</th>
              <th className="px-4 py-3 w-1/4 text-[0.875rem]">Revenue</th>
              <th className="px-4 py-3 w-1/4 text-[0.875rem]">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {courses.length > 0 ? (
              courses.map((course) => (
                <tr key={course.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{course.title}</td>
                  <td className="px-4 py-3">{course.students}</td>
                  <td className="px-4 py-3">{course.revenue}</td>
                  <td className="px-4 py-3">
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDeleteCourse(course.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No courses found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorCourses;
