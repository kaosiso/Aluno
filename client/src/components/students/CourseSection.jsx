import React from "react";
import { coursesData } from "../../assets/assets";
import CourseCard from "./CourseCard";

const CourseSection = () => {
  return (
   <div className="text-black bg-[#FAFAFA] pb-6">
    <p className="text-center text-black text-xl pt-10" >Featured Courses</p>
     <div className=" flex flex-wrap justify-center gap-6 p-4 pt-10 items-start mx-auto">
      {coursesData.slice(0, 5).map((course, index) => (
        <CourseCard key={index} course={course} />
      ))}
    </div>
   </div>
  );
};

export default CourseSection;
