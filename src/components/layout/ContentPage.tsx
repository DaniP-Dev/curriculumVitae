import React from "react";

const ContentPage = ({ children }: { children: React.ReactNode }) => {      
  return (
    <>
      <div className="bg-green-500 w-full max-w-full h-screen">{children}</div>
    </>
  );
};

export default ContentPage;
