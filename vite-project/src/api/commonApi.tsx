import axiosClients from "./axiosClients";
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from "axios";
const API_KEY = "564dfb6692222e3e48af50abcbb0ac71";

export const getBanner = () => {
  const url = "/banner/homepage";
  return axiosClients.get(url);
};

export const uploadImage = (image: string) => {
  const url = `https://api.imgbb.com/1/upload?key=${API_KEY}`;

  const config: AxiosRequestConfig = {
    transformRequest: (data: any, headers: AxiosRequestHeaders) => {
      return data;
    },
  };
  console.log("image", image);
  const bodyFormData = new FormData();
  bodyFormData.append("image", image);

  return axios.post(url, bodyFormData, config);
};
