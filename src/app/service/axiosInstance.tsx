/** @format */

import axios from "axios";

const API_URL = "";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
