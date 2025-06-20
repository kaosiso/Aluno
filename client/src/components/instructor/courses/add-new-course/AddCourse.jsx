import React, { useState } from "react";
import axios from "axios";

const AddCoursePage = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseThumbnail, setCourseThumbnail] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!courseThumbnail) {
      setMessage({ type: "error", text: "Please upload a thumbnail." });
      return;
    }

    const formData = new FormData();
    const courseData = {
      courseTitle,
      courseDescription,
      coursePrice,
    };

    formData.append("courseData", JSON.stringify(courseData));
    console.log("🚀 Sending courseData:", JSON.stringify(courseData));

    formData.append("file", courseThumbnail);

    try {
      setIsSubmitting(true);
      setMessage(null);

      const response = await axios.post(
        "http://localhost:5000/api/instructor/create-course",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      setMessage({ type: "success", text: "✅ Course created successfully!" });
      console.log(response.data);

      // Reset form
      setCourseTitle("");
      setCourseDescription("");
      setCoursePrice("");
      setCourseThumbnail(null);
    } catch (error) {
      console.error("❌ Error creating course:", error);
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "An error occurred while creating the course.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-black bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">📚 Add New Course</h2>

      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Course Title"
          value={courseTitle}
          onChange={(e) => setCourseTitle(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          placeholder="Course Description"
          value={courseDescription}
          onChange={(e) => setCourseDescription(e.target.value)}
          className="w-full border p-2 rounded"
          rows={4}
          required
        />
        <input
          type="number"
          placeholder="Course Price"
          value={coursePrice}
          onChange={(e) => setCoursePrice(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setCourseThumbnail(e.target.files[0])}
          className="w-full"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCoursePage;
