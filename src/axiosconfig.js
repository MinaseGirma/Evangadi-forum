import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://new-evangadi-forum-final-1.onrender.com/api",
  withCredentials: true,
});

export default axiosInstance;