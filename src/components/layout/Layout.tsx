import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex-1 overflow-y-auto max-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
