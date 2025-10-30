import axios from "axios";

const API_BASE_URL = "https://new-evangadi-forum-final-1.onrender.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // if you’re using cookies or sessions
});

export default api;
