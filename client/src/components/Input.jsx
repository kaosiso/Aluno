import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

function Input({ icon: Icon, label, type, ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative mb-6">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1 ml-1">
          {label}
        </label>
      )}

      {/* Left icon */}
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-gray-600 mt-6" />
      </div>
      <input
        {...props}
        type={inputType}
        autoComplete="off"
        className="w-full min-w-[300px] pl-12 pr-10 py-3 text-base border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] placeholder:text-gray-400"
      />

      {/* Password toggle icon */}
      {isPassword && (
        <div
          className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500 mt-6"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </div>
      )}
    </div>
  );
}

export default Input;
