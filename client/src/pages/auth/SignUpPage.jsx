import React, { useState } from "react";
import { motion } from "framer-motion";
import Input from "../../components/Input";
import { User, Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../../components/PasswordStrengthMeter";
import { useAuthStore } from "../../store/AuthStore/authStore"

function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showStrength, setShowStrength] = useState(false); // 👈 for conditional meter
  const navigate = useNavigate();
  const { signup, error, isLoading } = useAuthStore();

  async function handleSignUp(e) {
    e.preventDefault();
    try {
      await signup(email, password, name);
      navigate("/checkemail");
    } catch (error) {
      console.log("Signup error:", error);
      // Optionally show an error message to the user here
    }
  }

  return (
    <div className="relative w-full flex items-center justify-center  z-10 min-h-screen">
      <motion.div
        className="w-full max-w-[600px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full z-10 p-10 rounded-xl ">
          <div>
            <Link to="/" className="flex items-center justify-center">
              <span className="logo font-extrabold text-[#2578c6] text-4xl">
                Aluno
              </span>
            </Link>
            <h2 className="text-md font-bold text-center text-[#000000] mb-0">
              Start Living By Learning
            </h2>
            <div className="px-8 py-4 justify-center">
              <p className="text-black text-center">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#6A0DAD] underline">
                  Login here
                </Link>
              </p>
            </div>
          </div>

          <form onSubmit={handleSignUp}>
            <Input
              label="Name"
              icon={User}
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Input
              label="Email"
              icon={Mail}
              type="email"
              placeholder="johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input
              label="Password"
              icon={Lock}
              type="password"
              placeholder="password"
              value={password}
              onFocus={() => setShowStrength(true)} // 👈 show on focus
              onBlur={() => password === "" && setShowStrength(false)} // 👈 hide if empty
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 font-sm text-sm mt-2">{error}</p>}

            {/* Password Strength Meter: show only on focus or when password is typed */}
            {showStrength && <PasswordStrengthMeter password={password} />}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#6A0DAD] text-white py-2 rounded-md mt-4"
              disabled={isLoading}
            >
              {isLoading ? <Loader className="animate-spin mx-auto" size={24} /> :"Sign Up"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default SignUpPage;
