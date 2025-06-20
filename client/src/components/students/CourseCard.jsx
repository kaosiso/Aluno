import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { updateAverage } from "../../utils.js/courseUtils"
import StarRating from "../course/starRating";

const CourseCard = ({ course }) => {
  if (!course.isPublished) return null;

  // Only needed if you're simulating a new rating
  // const newRating = 4.0;
  // const updatedRating = updateAverageRating(course.rating, course.totalReviews, newRating);

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden transition-shadow w-full max-w-xs hover:shadow-lg"
      style={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Link to={`/courses/${course.id}`}>
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-44 object-cover"
        />

        <div className="p-4 h-[calc(100%-11rem)] flex flex-col justify-between">
          <div>
            <h3 className="text-md text-black font-medium">{course.title}</h3>

            <div className="flex items-center justify-between mt-1">
              <p className="text-sm text-gray-600">By {course.author}</p>
              <p className="text-base text-blue-600 font-semibold">
                {course.price}
              </p>
            </div>
          </div>

          {/* ⭐ Rating */}
          <div className="flex items-center gap-1 mt-4">
            <StarRating rating={course.rating} />
            <span className="text-sm text-gray-600 ml-1">
              {course.rating}
              ({course.totalReviews})
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
