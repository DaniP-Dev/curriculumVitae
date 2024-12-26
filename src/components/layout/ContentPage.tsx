"use client";
import React, { useEffect, useRef } from "react";

const ContentPage = ({ children }: { children: React.ReactNode }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (pageRef.current) {
      observer.observe(pageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={pageRef}
      className="min-h-screen w-full snap-start bg-green-500 flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default ContentPage;
