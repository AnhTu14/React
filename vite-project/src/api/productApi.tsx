import axiosClient from "./axiosClients";
const product = {
  getCategory() {
    const url = "/category-product";
    return axiosClient.get(url);
  },
  getProducts(params) {
    const url = "/products";
    return axiosClient.get(url, { params });
  },
  getProductsFavorite(params) {
    const url = "/product-like";
    return axiosClient.get(url, { params });
  },
};
export default product;
