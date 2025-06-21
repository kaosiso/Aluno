import { create } from "zustand";
import axios from "axios";


const API_URL = `${import.meta.env.VITE_BACKEND_URL}/api/auth`;


axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,
  message: null,

signup: async (email, password, name, role = "student") => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password, name, role }, {
      withCredentials: true, // 👈 allows sending/receiving cookies
      headers: {
        "Content-Type": "application/json",
      }});
    set({
      user: response.data.user,
      isAuthenticated: true,
      isLoading: false,
    });
    console.log("📤 Signing up with:", { email, password, name, role });

  } catch (error) {
    set({
      error: error.response?.data?.message || "Error signing up",
      isLoading: false,
    });
    throw error;
  }
},
login: async (email, password,) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password, },{
          headers: {
        "Content-Type": "application/json",}

    });
    set({
      user: response.data.user,
      isAuthenticated: true,
      isLoading: false,
      error: null,
    });
  } catch (error) {
    set({
      error: error.response?.data?.message || "Error logging in ",
      isLoading: false,
    });
    throw error;
  }
},
logout: async ()=> {
  set({isLoading: true, error: null});
  try {
    await axios.post(`${API_URL}/logout`)
    set({user: null, isAuthenticated: false, error: null, isLoading: false})
  } catch (error) {
    set({error: "Error loggin out", isLoading: false})
    throw error
    
  }
},
checkAuth: async () => {
  set({ isCheckingAuth: true, error: null });

  try {
    const response = await axios.get(`${API_URL}/check-auth`);

    set({
      user: response.data.user,
      isAuthenticated: true,
      isCheckingAuth: false,
      error: null,
    });
  } catch (error) {
    console.error("Auth check failed:", error);

    set({
      user: null,
      isAuthenticated: false,
      isCheckingAuth: false,
      error: error?.response?.data?.message || "Authentication check failed",
    });
  }
},
forgotPassword : async (email) => {
  set({isLoading: true, error:null, message: null})
  try {
    const response = await axios.post(`${API_URL}/forgot-password`, {email});
    set({message: response.data.message, isLoading: false})
  } catch (error) {
    set({
      isLoading: false,
      error: error.response.data.message || "Error sending reset password email"
    })
    throw error
  }
},
resetPassword : async(token, password) => {
  set({
    isLoading: true, error: null
  })
  try {
    const response = await axios.post(`${API_URL}/reset-password/${token}`, {password})
    set({message: response.data.message, isLoading: false})

  } catch (error) {
        set({
          isLoading: false,
          error: error.response.data.message || "Error resetting password"
        })
        throw error
  }
}

}));
