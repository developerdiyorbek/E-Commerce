import axios from "axios";
import { BASE_URL } from "@/constants";

// base url
const customAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

customAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const authorization = token ? `Bearer ${token}` : "";
    config.headers.authorization = authorization;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default customAxios;
