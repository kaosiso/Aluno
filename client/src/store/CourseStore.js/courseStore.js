// src/store/courseStore.js
import { create } from "zustand";
import { coursesData as defaultCourses } from "../../assets/assets";

const useCourseStore = create((set, get) => ({
  courses: defaultCourses,

  setCourses: (newCourses) => set({ courses: newCourses }),

  addCourse: (course) =>
    set((state) => ({ courses: [...state.courses, course] })),

  // 🧠 Get course by ID
  getCourseById: (id) =>
    get().courses.find((course) => course.id === id),

  // 🔎 Flexible search function
  searchCourses: (query) => {
    const lower = query.toLowerCase();
    return get().courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lower) ||
        course.description.toLowerCase().includes(lower) ||
        course.author.toLowerCase().includes(lower)
    );
  },
}));

export default useCourseStore;
