import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Input from "../../components/Input";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/AuthStore/authStore";
import toast from "react-hot-toast";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login, isLoading, error, isAuthenticated } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login failed");
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/"); // You can change to "/dashboard" if needed
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative w-full flex items-center justify-center z-10 min-h-screen">
      <motion.div
        className="w-full max-w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full z-10 p-10 rounded-xl bg-white shadow-md">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center">
            <span className="logo font-extrabold text-[#2578c6] text-4xl">
              Aluno
            </span>
          </Link>
          <h2 className="text-md font-bold text-center text-[#000000] mt-2">
            Start Living By Learning
          </h2>
          <p className="text-black text-md text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#6A0DAD] underline">
              Sign Up here
            </Link>
          </p>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="mt-6">
            <Input
              label="Email"
              icon={Mail}
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              icon={Lock}
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="flex justify-end mt-2 mb-4">
              <Link
                to="/forgot-password"
                className="text-green-500 hover:underline text-sm"
              >
                Forgot password?
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#6A0DAD] text-white py-2 rounded-md mt-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin mx-auto" />
              ) : (
                "Login"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default LoginPage;
