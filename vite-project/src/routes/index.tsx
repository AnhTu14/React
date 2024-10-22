import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/LoadLazy";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../layouts/Layout";
const Home = React.lazy(() => import("@/page/Home/index"));
const Card = React.lazy(() => import("@/page/card/index"));
const Product = React.lazy(() => import("../page/product/index"));
const Login = React.lazy(() => import("@/page/Auth/Login"));
const Register = React.lazy(() => import("@/page/Auth/Register"));
const Account = React.lazy(() => import("@/page/Account"));
const Order = React.lazy(() => import("@/page/Order"));
const FavoriteProducts = React.lazy(() => import("@/page/FavoriteProducts"));
const ChangePassword = React.lazy(
  () => import("@/page/Account/ChangePassword")
);
const NotFound = React.lazy(() => import("@/page/NotFound"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Sử dụng Layout chứa Header và Footer
    children: [
      {
        path: "/",
        element: <LazyLoad children={<Home />} />,
      },
      {
        path: "/san-pham",
        element: <LazyLoad children={<Product />} />,
      },
      {
        path: "/tai-khoan",
        element: <LazyLoad children={<Account />} />,
      },
      {
        path: "/dang-nhap",
        element: <LazyLoad children={<Login />} />,
      },
      {
        path: "/dang-ky",
        element: <LazyLoad children={<Register />} />,
      },
      {
        path: "/san-pham-yeu-thich",
        element: (
          <PrivateRoute>
            <LazyLoad children={<FavoriteProducts />} />
          </PrivateRoute>
        ),
      },
      {
        path: "/change-password",
        element: (
          <PrivateRoute>
            <LazyLoad children={<ChangePassword />} />
          </PrivateRoute>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <LazyLoad children={<Order />} />
          </PrivateRoute>
        ),
      },
      {
        path: "/gio-hang",
        element: (
          <PrivateRoute>
            <LazyLoad children={<Card />} />
          </PrivateRoute>
        ), // Trang Card được bảo vệ
      },
      {
        path: "*",
        element: <LazyLoad children={<NotFound />} />,
      },
    ],
  },
]);

export default router;
