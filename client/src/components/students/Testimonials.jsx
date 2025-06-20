import React from "react";
import { dummyTestimonial } from "../../assets/assets";
import StarRating from "../course/starRating";

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-10 text-center">
      <h2 className="text-xl md:text-xl font-medium text-gray-800 mb-4">
        What Our Learners Say
      </h2>
      <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
        Real experiences from students who have transformed their careers.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {dummyTestimonial.map((testimonial, index) => {
          const rotationClass =
            index === 0
              ? "-rotate-3"
              : index === dummyTestimonial.length - 1
              ? "rotate-3"
              : "";

          const liftClass = index === 1 ? "-mt-6" : "";

          return (
            <div
              key={index}
              className={`bg-white shadow-md rounded-xl p-6 text-left hover:shadow-lg transition duration-300 w-64 h-80 flex flex-col justify-between transform ${rotationClass} ${liftClass}`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>

                {/* Feedback with visible quote text */}
                <p className="text-gray-700 text-sm italic flex items-start gap-2">
                  <span className="text-2xl text-black-500 leading-none">“</span>
                  {testimonial.feedback}
                </p>
              </div>

              {/* ⭐ Star Rating */}
              <div className="flex items-center justify-center mt-4">
                <StarRating rating={testimonial.rating} />
                <span className="ml-2 text-sm text-gray-600">{testimonial.rating}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
