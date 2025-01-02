import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    "x-api-key": import.meta.env.VITE_API_KEY, // Add your API key here
  },
});

// Interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
