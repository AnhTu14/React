import axiosClients from "./axiosClients";

export const getBanner = () => {
  const url = "/banner/homepage";
  return axiosClients.get(url);
};
