import React, { useEffect } from "react";
import { useLocation, Link, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/AuthStore/authStore";
import { Toaster } from "react-hot-toast";

// Public pages
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/LoginPage";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage";
import CheckEmailPage from "./pages/auth/CheckEmailPage";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage";
import NotFoundPage from "./pages/public/NotFoundPage"


// Student
import StudentDashboard from "./pages/student/index";
import BecomeInstructorPage from "./pages/student/BecomeInstructorPage";
import CourseDetailsPage from "./components/students/CourseDetails";
import CourseList from "./components/students/CourseList";

// Instructor
import InstructorDashboard from "./pages/instructor/index";
import AddCoursePage from "./components/instructor/courses/add-new-course/AddCourse";
import InstructorCourses from "./components/instructor/courses/InstructorCourses";
import CourseReview from "./components/instructor/courses/add-new-course/CourseReview";
import NewStudent from "./components/student/NewStudent";
import InstructorNotification from "./components/instructor/Notifications/InstructorNotification";
import UserProfile from "./components/instructor/user/UserProfile";

// Layouts
import MainLayout from "./components/layouts/MainLayout";
import InstructorLayout from "./components/layouts/InstructorLayout";
import StudentLayout from "./components/layouts/StudentLayout";

// Home & Guards
import HomePage from "./pages/public/HomePage";
import RootGuard from "./components/Authguard/RootGuard";

// Static Pages

import AboutPage from "./pages/public/AboutPage";
import ContactPage from "./pages/public/ContactPage";
import SitemapPage from "./pages/public/Sitemap";
import PricingPage from "./pages/public/PricingPage";
import HelpPage from "./pages/public/HelpPage";
import CoursesPage from "./pages/public/CoursesPage";

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <span className="text-xl font-medium">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        {/* Public-only Routes */}
        <Route path="signup" element={<RootGuard publicOnly><SignUpPage /></RootGuard>} />
        <Route path="login" element={<RootGuard publicOnly><LoginPage /></RootGuard>} />
        <Route path="forgot-password" element={<RootGuard publicOnly><ForgotPasswordPage /></RootGuard>} />
        <Route path="reset-password/:token" element={<RootGuard publicOnly><ResetPasswordPage /></RootGuard>} />
        <Route path="checkemail" element={<RootGuard publicOnly><CheckEmailPage /></RootGuard>} />
        <Route path="verify" element={<RootGuard publicOnly><EmailVerificationPage /></RootGuard>} />

        {/* Main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="courses/:courseId" element={<CourseDetailsPage />} />
          <Route path="course-list" element={<CourseList />} />

          {/* Static Pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="sitemap" element={<SitemapPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="courses" element={<CoursesPage />} />
        </Route>

        {/* Instructor Routes */}
        <Route path="instructor" element={<RootGuard role="instructor"><InstructorLayout /></RootGuard>}>
          <Route path="dashboard" element={<InstructorDashboard />}>
            <Route path="courses" element={<InstructorCourses />} />
            <Route path="create-course" element={<AddCoursePage />} />
            <Route path="create-new-course/course-review" element={<CourseReview />} />
            <Route path="new-student" element={<NewStudent />} />
            <Route path="notifications" element={<InstructorNotification />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>
        </Route>

        {/* Student Routes */}
        <Route path="student" element={<RootGuard role="student"><StudentLayout /></RootGuard>}>
          <Route index element={<StudentDashboard />} />
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="become-instructor" element={<BecomeInstructorPage />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
