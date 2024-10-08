import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = Boolean(localStorage.getItem("access_token"));

  if (!isLogin) {
    return <Navigate to="/login" />; // Chuyển hướng về trang chủ nếu chưa đăng nhập
  }

  return children; // Trả về nội dung nếu đã xác thực
};

export default PrivateRoute;
