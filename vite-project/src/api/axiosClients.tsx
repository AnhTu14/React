import axios, { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosClients = axios.create({
  baseURL: import.meta.env.VITE_DEV_API_HOST,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosClients.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClients.interceptors.response.use(
  function (response: AxiosResponse) {
    console.log("responseAxi", response);
    return response.data;
  },
  function (error) {
    console.log("axios", error);
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("accessToken");
      window.location.href = "/dang-nhap";
    }
    return Promise.reject(error);
  }
);
export default axiosClients;
