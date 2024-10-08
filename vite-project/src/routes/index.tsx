import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoad from "../components/LoadLazy";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../layouts/Layout";
const Home = React.lazy(() => import("../page/home/index"));
const Card = React.lazy(() => import("../page/card/index"));
const Product = React.lazy(() => import("../page/product/index"));

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
        path: "/product",
        element: <LazyLoad children={<Product />} />,
      },
      {
        path: "/card",
        element: (
          <PrivateRoute>
            <LazyLoad children={<Card />} />
          </PrivateRoute>
        ), // Trang Card được bảo vệ
      },
    ],
  },
]);

export default router;
