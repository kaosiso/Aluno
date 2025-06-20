import React from "react";
import { useNavigate } from "react-router-dom";

function CheckEmailPage() {
  const navigate = useNavigate();

  return (
    <div className="text-center py-10 px-4">
      <h2 className="text-2xl font-bold text-green-600 mb-2">
        🎉 Sign Up Successful!
      </h2>
      <p className="text-gray-700">
        We've sent a verification link to your email.
        <br />
        Please check your inbox and click the link to verify your account.
      </p>
      <p className="text-sm text-gray-500 mt-4">
        Didn’t receive it? Check your spam folder or{" "}
        <button
          onClick={() => navigate("/login")}
          className="underline text-blue-500 hover:text-blue-700 transition"
        >
          login
        </button>.
      </p>
    </div>
  );
}

export default CheckEmailPage;
