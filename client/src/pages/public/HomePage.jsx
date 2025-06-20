import React from "react";
import CourseSection from "../../components/students/CourseSection";
import Testimonials from "../../components/students/Testimonials"
import Sponsors from "../../components/students/Sponsors"
import CourseCategories from "../../components/students/CourseCategories";
import TeamSection from "../../components/students/MeetTheTeam";

const HomePage = () => {
  return (
    <div>
      <CourseSection />
      <CourseCategories />

      <Testimonials />
      <Sponsors />
      <TeamSection />
      
    </div>
  );
};

export default HomePage;
