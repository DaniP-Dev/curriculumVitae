import React, { useState, useEffect, useRef } from "react";

const sidebarButtons = [
  {
    id: "btn1",
    label: "primer boton",
    icono: "🚀",
    onClick: () => alert("boton 1"),
  },
  {
    id: "btn2",
    label: "segundo boton",
    icono: "🔥",
    onClick: () => alert("boton 2"),
  },
];

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const btnOpen = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setOpenSidebar(false);
    }
  };

  const handleButtonClick = (onClick: () => void) => {
    setOpenSidebar(false);
    setTimeout(() => {
      onClick();
    }, 101);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col bg-primary" ref={sidebarRef}>
        <button onClick={btnOpen} className="p-2 hover:bg-accent">
          {openSidebar ? "←" : "→"}
        </button>

        <aside className="flex h-screen">
          <div className="w-10 flex flex-col bg-primary">
            {sidebarButtons.map((button) => (
              <button
                key={button.id}
                className={`p-2 hover:bg-accent ${
                  openSidebar ? "" : "hover:bg-accent"
                }`}
                onClick={() => handleButtonClick(button.onClick)}
              >
                {button.icono}
              </button>
            ))}
          </div>

          <div
            className={`bg-secondary transition-all duration-100 ${
              openSidebar ? "w-[10rem]" : "w-0"
            }`}
          >
            <div className="">
              {sidebarButtons.map((button) => (
                <button
                  key={button.id}
                  className={`flex py-2 h-10 w-full justify-center hover:bg-accent ${
                    openSidebar ? "w-40" : "w-0"
                  } `}
                >
                  {openSidebar && (
                    <div
                      className="transition-all duration-300"
                      onClick={() => handleButtonClick(button.onClick)}
                    >
                      {button.label}
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
