import { useState } from "react";
import { motion } from "framer-motion";
import { useAuthStore } from "../../store/AuthStore/authStore";
import { useNavigate, useParams, Link } from "react-router-dom";
import Input from "../../components/Input";
import { Lock } from "lucide-react";
import toast from "react-hot-toast";

const ResetPasswordPage = () => {
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { resetPassword, error, isLoading, message } = useAuthStore();

	const { token } = useParams();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match");
			return;
		}
		try {
			await resetPassword(token, password);

			toast.success("Password reset successfully, redirecting to login page...");
			setTimeout(() => {
				navigate("/login");
			}, 2000);
		} catch (error) {
			console.error(error);
			toast.error(error.message || "Error resetting password");
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
					</div>

					{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
					{message && <p className="text-green-500 text-sm mb-4">{message}</p>}

					<form onSubmit={handleSubmit}>
						<Input
							label="New Password"
							icon={Lock}
							type="password"
							placeholder="Enter new password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<Input
							label="Confirm Password"
							icon={Lock}
							type="password"
							placeholder="Confirm new password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>

						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							type="submit"
							className="w-full bg-[#6A0DAD] text-white py-2 rounded-md mt-4"
							disabled={isLoading}
						>
							{isLoading ? "Resetting..." : "Set New Password"}
						</motion.button>
					</form>

					<div className="mt-6 text-center">
						<Link to="/login" className="text-green-500 text-sm hover:underline">
							Back to Login
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default ResetPasswordPage;
