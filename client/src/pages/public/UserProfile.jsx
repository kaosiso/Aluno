import React from 'react'
import { motion } from "framer-motion";
import { useAuthStore } from '../store/authStore'
import { formatDate } from '../utils.js/data'

const UserProfile = () => {
  const {user, logout } = useAuthStore()
  const handleLogout =()=> {
    logout()
  }
  return (
    <div className='text-black' >
      <h3>Profile information</h3>
      <p>{user.name}</p>
      <p>{user.email}</p>
        <div className='flex gap-4' >
        <p>Joined</p>
        {new Date(user.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        })}
    </div>
    <div className='flex gap-4' >
        <p>Lastlogin</p>
        {formatDate(user.lastLogin)}
    </div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.6 }}
				className='mt-4'
			>
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</motion.button>
			</motion.div>
    </div>
  )
}

export default UserProfile
