import React from "react";
import { Outlet } from "react-router-dom";
import LayoutNew from "./LayoutNew";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <LayoutNew>
        <Navbar />
        <Outlet />
        <Footer />
      </LayoutNew>
    </>
  );
};

export default Layout;
