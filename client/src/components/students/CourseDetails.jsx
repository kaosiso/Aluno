import React from "react";
import { useParams } from "react-router-dom";
import { coursesData } from "../../assets/assets";
import { FaStar } from "react-icons/fa";

const CourseDetailsPage = () => {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === courseId);

  if (!course) {
    return <div className="p-6">Course not found.</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 md:px-12 py-6">
      {/* Left: Course Info & Curriculum */}
      <div className="md:w-[60%]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white p-4 rounded-t-3xl rounded-b-md shadow-lg">
          <h2 className="text-3xl font-bold px-2 mb-2">{course.title}</h2>
          <p className="text-sm text-gray-100 px-2 mb-4 italic">
            {course.description}
          </p>

          <div className="px-2 space-y-1 text-sm text-gray-200">
            <p>
              <span className="font-semibold text-white">👩‍🏫 Creator:</span>{" "}
              {course.creator}
            </p>
            <p>
              <span className="font-semibold text-white">📅 Created On:</span>{" "}
              {course.createdOn}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-2 px-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              <span className="ml-2 text-sm text-gray-200">5.0</span>
            </div>
          </div>
        </div>

        {/* Curriculum */}
        <div className="mt-6 px-2">
          <h2 className="text-sm font-semibold">Course Contents</h2>
          <p className="text-xs italic text-gray-500 pb-4">
            Total Duration: {course.duration}
          </p>

          <div className="space-y-8">
            {course.courseContent.map((chapter) => (
              <div
                key={chapter.chapterId}
                className="border rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-blue-50 px-4 py-3 font-semibold text-blue-800 text-sm md:text-base">
                  {chapter.chapterOrder}. {chapter.chapterTitle}
                </div>

                <div className="divide-y">
                  {chapter.lectures.map((lecture) => (
                    <div
                      key={lecture.lectureId}
                      className="flex justify-between items-center px-4 py-3 text-sm text-gray-800 hover:bg-gray-50"
                    >
                      <span>
                        {chapter.chapterOrder}.{lecture.lectureOrder}{" "}
                        {lecture.lectureTitle}
                      </span>
                      <span className="text-gray-500 text-xs md:text-sm">
                        {lecture.lectureDuration}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right: Thumbnail, Price, CTA */}
      <div className="md:w-1/3 flex flex-col items-center shadow-lg rounded-2xl p-6 bg-white text-gray-800 h-fit">
        {/* Thumbnail */}
        <img
          src={course.thumbnail}
          alt="Course Thumbnail"
          className="rounded-xl shadow-md mb-6 w-64 h-80 object-cover"
        />

        {/* Price Info */}
        <div className="flex flex-row justify-between items-center w-full text-lg mb-6 px-2">
          <p className="font-semibold text-gray-700">Price:</p>
          <p className="text-blue-600 font-bold">{course.price}</p>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-8 rounded-full hover:shadow-md transition duration-300 mb-4">
          Buy Now
        </button>

        {/* What's in the course */}
        <div className="w-full mt-2">
          <h3 className="text-md font-semibold text-gray-700 mb-2">
            📘 What's in the course
          </h3>
          <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
            {course.courseContent[0]?.lectures?.map((lecture, index) => (
              <li key={index}>{lecture.lectureTitle}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;
