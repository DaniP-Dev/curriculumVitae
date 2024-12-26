import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ContentPage from "./ContentPage";

const Layout = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <ContentPage />
        </div>
      </div>
    </>
  );
};

export default Layout;
