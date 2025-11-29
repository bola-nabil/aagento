import React, {lazy} from "react";

const Navbar = lazy(() => import("./Navbar/Navbar"));
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
