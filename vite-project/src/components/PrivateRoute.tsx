import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLogin = Boolean(localStorage.getItem("accessToken"));

  if (!isLogin) {
    return <Navigate to="/dang-nhap" />; // Chuyển hướng về trang chủ nếu chưa đăng nhập
  }

  return children; // Trả về nội dung nếu đã xác thực
};

export default PrivateRoute;
