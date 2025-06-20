import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../../store/AuthStore/authStore"; // adjust path if needed

const RootGuard = ({ children, allowedRoles = [], publicOnly = false }) => {
  const { isAuthenticated, user } = useAuthStore();
  const location = useLocation();

  // Redirect logged-in, verified users away from login/signup pages
  if (publicOnly && isAuthenticated && user?.isVerified) {
    return <Navigate to="/" replace />;
  }

  // Redirect guests from protected pages
  if (!publicOnly && !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

   if (!publicOnly && !isAuthenticated) {
    return <Navigate to="/signup" replace />;
  }


  // Redirect unverified users
  // if (!publicOnly && user && !user.isVerified) {
  //   return <Navigate to="/verify-email" replace />;
  // }

  // If roles are defined, check access
  if (
    !publicOnly &&
    allowedRoles.length > 0 &&
    !allowedRoles.includes(user?.role)
  ) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default RootGuard;
