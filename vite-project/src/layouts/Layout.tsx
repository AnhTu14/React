import React from "react";
import Header from "@components/Header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet /> {/* Đây là nơi sẽ render các component của từng trang */}
      </main>
    </div>
  );
};

export default Layout;
