import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Sponsors from "./Sponsors";
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
       <ScrollToTop/>
      <Navbar />
      <div className="py-14 text-center overflow-hidden">
        <Outlet />
      </div>
      <div className="overflow-hidden">
      <Sponsors />
      </div>
      <Footer />
    </>
  );
}



