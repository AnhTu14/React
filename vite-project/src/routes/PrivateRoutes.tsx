// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import LazyLoad from "../components/LazyLoad";
// import PrivateRoute from "../components/PrivateRoute";

// // Các trang được tải chậm (Lazy load)
// const Home = React.lazy(() => import("../pages/Home"));
// const About = React.lazy(() => import("../pages/About"));
// const Product = React.lazy(() => import("../pages/Product"));
// const Card = React.lazy(() => import("../pages/Card"));

// // Định nghĩa các router
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LazyLoad children={<Home />} />, // Trang chủ
//   },
//   {
//     path: "/about",
//     element: <LazyLoad children={<About />} />, // Trang Giới thiệu
//   },
//   {
//     path: "/product",
//     element: <LazyLoad children={<Product />} />, // Trang Sản phẩm
//   },
//   {
//     path: "/card",
//     element: (
//       <PrivateRoute>
//         <LazyLoad children={<Card />} />
//       </PrivateRoute>
//     ), // Trang Card được bảo vệ
//   },
// ]);

// export default router;
