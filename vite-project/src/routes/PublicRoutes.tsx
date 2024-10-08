import React from "react";
const Home = React.lazy(() => import("../page/home/index"));
import LazyLoad from "../components/LoadLazy";
const routerPublic = [
  {
    path: "/",
    element: <LazyLoad children={<Home />} />,
  },
];

export default routerPublic;
