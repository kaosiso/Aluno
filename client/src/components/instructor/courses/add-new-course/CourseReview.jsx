import React from "react";
import { FaStar } from "react-icons/fa"; // ⭐ Import FontAwesome Star Icon
import thumbnail from "../../../../assets/thunbnail.jpg";

const courseData = {
  title: "CSS Full Course",
  description:
    "Master the art of styling web pages with this comprehensive CSS Full Course 2025. Whether you're a complete beginner or looking to sharpen your front-end development skills, this course takes you from the basics of CSS to advanced layout techniques and responsive design.",
  creator: "Sarah Davies",
  createdOn: "2025-01-06",
  price: 12,
  thumbnail: thumbnail,
  curriculum: [
    {
      section: "Fundamentals of CSS",
      lessons: [
        { title: "Introduction", duration: "5 minutes" },
        { title: "CSS Selectors", duration: "5 minutes", watchable: true },
        {
          title: "Colors, Background and Borders",
          duration: "5 minutes",
          watchable: true,
        },
        { title: "The Box Model", duration: "1hr 15 minutes" },
        { title: "Layout and Positioning", duration: "1hr 15 minutes" },
        {
          title: "Advanced CSS and Responsive Design",
          duration: "1hr 15 minutes",
        },
      ],
    },
  ],
};

const CourseReview = () => {
  return (
    <div className="max-w-6xl mx-auto py-2 px-2 text-black">
      <span className="font-semibold text-2xl mb-8 px-2">Course Structure</span>
      <div className="flex flex-col md:flex-row gap-8 py-10 ">
        {/* Course Info */}
        <div className="md:w-[55%]">
          <div className="bg-gradient-to-r from-blue-500/80 to-indigo-600/80 text-white p-4 rounded-t-3xl rounded-b-md shadow-lg">
            <h2 className="text-3xl font-bold px-2 mb-2">{courseData.title}</h2>

            <p className="text-sm text-gray-100 px-2 mb-4 italic">
              {courseData.description}
            </p>

            <div className="px-2 space-y-1 text-sm text-gray-200">
              <p>
                <span className="font-semibold text-white">👩‍🏫 Creator:</span>{" "}
                {courseData.creator}
              </p>
              <p>
                <span className="font-semibold text-white">📅 Created On:</span>{" "}
                {courseData.createdOn}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 px-4 ">
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
          <h2 className="text-sm font-semibold pt-5 px-2">Course Contents</h2>
          <p className="text-xs italic text-gray-500 px-2 pb-4">
            Total Duration: 4h 55m
          </p>

          <div className="space-y-10">
            {courseData.curriculum.map((section, index) => (
              <div key={index} className="border rounded">
                <div className="bg-gray-100 p-3 font-medium">
                  {section.section}
                </div>
                <div>
                  {section.lessons.map((lesson, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center p-3 border-t"
                    >
                      <span>{lesson.title}</span>
                      <span className="text-sm">
                        {lesson.watchable ? (
                          <a href="#" className="text-blue-600 hover:underline">
                            Watch
                          </a>
                        ) : (
                          lesson.duration
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Price and Thumbnail */}
        {/* Price and Thumbnail */}
        <div className="md:w-1/3 flex flex-col items-center shadow-lg rounded-2xl p-6 bg-white text-gray-800">
          {/* Thumbnail */}
          <img
            src={courseData.thumbnail}
            alt="Course Thumbnail"
            className="rounded-xl shadow-md mb-6 w-64 h-80 object-cover"
          />

          {/* Price Info */}
          <div className="flex flex-row justify-between items-center w-full text-lg mb-6 px-2">
            <p className="font-semibold text-gray-700">Price:</p>
            <p className="text-blue-600 font-bold">${courseData.price}</p>
          </div>

          {/* CTA Button */}
          <button className=" w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-2 px-8 rounded-full hover:shadow-md transition duration-300 mb-4">
            Buy Now
          </button>

          {/* What's in the course */}
          <div className="w-full mt-2">
            <h3 className="text-md font-semibold text-gray-700 mb-2">
              📘 What's in the course
            </h3>
            <ul className="list-disc pl-6 text-sm text-gray-600 space-y-1">
              {courseData.curriculum[0].lessons.map((lesson, index) => (
                <li key={index}>{lesson.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
