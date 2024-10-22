import axiosClients from "./axiosClients";
const orders = {
  getOrder() {
    const url = "/bill";
    return axiosClients.get(url);
  },
};
export default orders;
