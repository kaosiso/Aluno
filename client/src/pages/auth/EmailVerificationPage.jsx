import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const EmailVerificationPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const token = searchParams.get("token");

    if (!token) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        await axios.get(`http://localhost:5000/api/auth/verify?token=${token}`);
        setStatus("success");
        toast.success("Email verified successfully!");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } catch (error) {
        setStatus("error");
        toast.error("Verification failed. Token might be invalid or expired.");
      }
    };

    verifyEmail();
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {status === "loading" && (
        <div className="text-gray-700 text-lg animate-pulse">
          Verifying your email, please wait...
        </div>
      )}

      {status === "success" && (
        <div className="text-green-600 text-xl font-semibold">
          ✅ Your email has been successfully verified! Redirecting to login...
        </div>
      )}

      {status === "error" && (
        <div className="text-red-500 text-lg font-medium">
          ❌ Verification failed or token expired. Please try again or request a new link.
        </div>
      )}
    </div>
  );
};

export default EmailVerificationPage;
