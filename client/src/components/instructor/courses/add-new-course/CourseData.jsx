import React from "react";

const CourseReview = {
  title: "CSS Full Course 2025",
  creator: "Sarah Davies",
  createdOn: "2025-01-06",
  price: 12,
  thumbnail: "https://via.placeholder.com/400x250", // Replace with actual thumbnail URL
  curriculum: [
    {
      section: "Fundamentals of CSS",
      lessons: [
        { title: "Introduction", duration: "5 minutes" },
        { title: "CSS Selectors", duration: "5 minutes", watchable: true },
        { title: "Colors, Background and Borders", duration: "5 minutes", watchable: true },
        { title: "The Box Model", duration: "1hr 15 minutes" },
        { title: "Layout and Positioning", duration: "1hr 15 minutes" },
        { title: "Advanced CSS and Responsive Design", duration: "1hr 15 minutes" },
      ],
    },
  ],
};

const CurriculumPage = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 text-black">
      <h1 className="text-3xl font-bold text-center mb-8">Course Structure</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Course Info */}
        <div className="md:w-2/3">
          <div className="bg-gray-800 text-white p-4 rounded mb-6">
            <p><strong>Title:</strong> {courseData.title}</p>
            <p><strong>Creator:</strong> {courseData.creator}</p>
            <p><strong>Created On:</strong> {courseData.createdOn}</p>
          </div>

          {/* Curriculum */}
          <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
          <div className="space-y-4">
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
                          <a href="#" className="text-blue-600 hover:underline">Watch</a>
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
        <div className="md:w-1/3 flex flex-col items-center">
          <img
            src={courseData.thumbnail}
            alt="Course Thumbnail"
            className="rounded-lg shadow-lg mb-4 w-full"
          />
          <div className="text-xl font-bold mb-2">Price</div>
          <div className="text-2xl text-blue-600 font-semibold mb-4">${courseData.price}</div>
          <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
