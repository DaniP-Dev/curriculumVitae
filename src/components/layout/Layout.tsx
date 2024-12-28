import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[100dvh] flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 relative">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
