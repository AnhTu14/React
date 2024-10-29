import axiosClients from "./axiosClients";

const cart = {
  postCart(payload) {
    const url = "/cart/add";
    return axiosClients.post(url, { payload });
  },
};

export default cart;
