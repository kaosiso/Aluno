import React, { useState } from "react";
import CourseCard from "./CourseCard";
import useCourseStore from "../../store/CourseStore.js/courseStore";
const CourseList = () => {
  const [search, setSearch] = useState("");
  const searchCourses = useCourseStore((state) => state.searchCourses);

  const results = search
    ? searchCourses(search)
    : useCourseStore((state) => state.courses);

  return (
    <div className="p-4  ">
      <div className="flex justify-end w-full mb-4 py-5 pr-20">
        <input
          type="text"
          placeholder="Search courses..."
          className="p-2 pl-5 border border-gray-400 hover:border-white focus:border-gray-100 focus:outline-none focus:ring-0 shadow-[0px_4px_12px_rgba(0,0,0,0.1)] rounded-xl w-[60%] bg-gray-100 text-black transition duration-200"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {results.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
