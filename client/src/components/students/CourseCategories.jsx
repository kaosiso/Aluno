const categories = [
  "Frontend Development", "Backend Development", "Intro to Computer Sci", "JavaScript",
  "Python", "Cloud Computing", "CyberSecurity", "Data Science", "Algorithms",
  "Learn Java", "UI/UX", "Machine Learning", "Information Technology",
  "Agriculture", "Intro to Tech", "Data Structure", "Information Science"
];

const CourseCategories = () => {
  return (
    <div className="bg-[#f1f1f1] py-10">
      <div className="max-w-5xl mx-auto text-center font-[inter] ">
        <h2 className="text-xl  text-black  mb-6">Course Categories</h2>

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-white transition cursor-pointer"
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCategories;
