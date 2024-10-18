import axiosClients from "./axiosClients";

const news = {
  getArticle(params) {
    const url = "/article";
    return axiosClients.get(url, { params });
  },
};

export default news;
