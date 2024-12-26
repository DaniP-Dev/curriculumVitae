import React, { useState } from "react";

const sidebarButtons = [
  {
    id: "btn1",
    label: "Button 1",
    emoji: "🚀",
    onClick: () => alert("Button 1 clicked!"),
  },
  {
    id: "btn2",
    label: "Button 2",
    emoji: "🔥",
    onClick: () => alert("Button 2 clicked!"),
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside
      className={`bg-blue-500 ${
        isOpen ? "w-40" : "w-10"
      } sticky top-0 h-screen transition-width duration-150 flex flex-col items-center`}
    >
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center mb-4 w-full hover:bg-blue-700"
      >
        <span className="w-8 flex justify-center">☰</span>
      </button>

      {sidebarButtons.map((button) => (
        <button
          key={button.id}
          onClick={button.onClick}
          className="mb-2 w-full flex items-center hover:bg-blue-700"
        >
          <span className="w-8 flex justify-center mb-2 ">{button.emoji}</span>
          {isOpen && <span className="flex-1 text-center ">{button.label}</span>}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
