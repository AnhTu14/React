import axiosClients from "./axiosClients";
const authApi = {
  register(userData) {
    const url = "/auth/register";
    return axiosClients.post(url, userData);
  },
  login(userData) {
    const url = "/auth/login";
    return axiosClients.post(url, userData);
  },
  getUser() {
    const url = "/account";
    return axiosClients.get(url);
  },
  changeUser(userData) {
    const url = "/account";
    return axiosClients.put(url, userData);
  },
  updateUser(userData) {
    const url = "/account";
    return axiosClients.put(url, userData);
  },
};
export default authApi;
