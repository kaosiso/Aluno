// src/context/CourseContext.jsx
import React, { createContext, useContext, useState } from "react";

// Create context
const CourseContext = createContext();

// Provider
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]); // initialize empty or with defaultData

  const addCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  const updateCourse = (id, updatedData) => {
    setCourses((prev) =>
      prev.map((course) => (course.id === id ? { ...course, ...updatedData } : course))
    );
  };

  const removeCourse = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        setCourses,
        addCourse,
        updateCourse,
        removeCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

// Hook
export const useCourseContext = () => useContext(CourseContext);
