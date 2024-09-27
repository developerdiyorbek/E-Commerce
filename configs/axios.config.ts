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

customAxios.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const { data } = await customAxios.post(
          "/auth/refresh",
          JSON.stringify({
            refreshToken: localStorage.getItem("refreshToken"),
            expiresInMins: 90,
          })
        );
        localStorage.setItem("token", data.accessToken);
        return customAxios.request(originalRequest);
      } catch (error) {
        console.log(error);
      }
    }
    throw error;
  }
);

export default customAxios;
