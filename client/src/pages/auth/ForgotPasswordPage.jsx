import React, { useState } from "react";
import { useAuthStore } from "../../store/AuthStore/authStore";
import { Mail, Loader } from "lucide-react";
import { motion } from "framer-motion";
import Input from "../../components/Input";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword } = useAuthStore();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      await forgotPassword(email);
      setIsSubmitted(true);
      toast.success("Password reset link sent to your email.");
    } catch (err) {
      const msg = err.response?.data?.message || "Something went wrong";
      setErrorMessage(msg);
      toast.error(msg);
    }
  };

  return (
    <div className="relative w-full flex items-center justify-center z-10 min-h-screen">
      <motion.div
        className="w-full max-w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full z-10 p-10 rounded-xl bg-white shadow-md">
          <div>
            <Link to="/" className="flex items-center justify-center">
              <span className="logo font-extrabold text-[#2578c6] text-4xl">
                Aluno
              </span>
            </Link>
            <h2 className="text-md font-bold text-center text-[#000000] mb-2">
              Reset Your Password
            </h2>
            <div className="px-8 py-4 justify-center">
              <p className="text-black text-md text-center">
                Remember your password?{" "}
                <Link to="/login" className="text-green-500 hover:underline">
                  Go back to login
                </Link>
              </p>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <Input
                label="Email"
                icon={Mail}
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4 text-center">
                  {errorMessage}
                </p>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-[#6A0DAD] text-white py-2 rounded-md mt-4"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="w-6 h-6 animate-spin text-center mx-auto" />
                ) : (
                  "Send Reset Link"
                )}
              </motion.button>
            </form>
          ) : (
            <div className="text-center mt-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>
              <p className="text-gray-700 mb-4">
                If an account exists for <strong>{email}</strong>, you’ll
                receive a password reset link shortly.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default ForgotPasswordPage;
