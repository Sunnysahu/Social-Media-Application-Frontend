import React from "react";
import { FaHome, FaSearch, FaListAlt, FaSignOutAlt } from "react-icons/fa";

function FooterComponent() {
  const footer = [
    { label: "Home", icon: <FaHome /> },
    { label: "Search", icon: <FaSearch /> },
    { label: "Feed", icon: <FaListAlt /> },
    { label: "Logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="bg-gray-100 w-full lg:hidden fixed bottom-0 left-0 z-50">
      <div className="flex justify-between items-center px-[5vw] py-2">
        {footer.map((item, index) => (
          <button
            key={index}
            type="button"
            className="flex flex-col items-center justify-center text-gray-700 w-full text-[clamp(12px,2.5vw,16px)]"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FooterComponent;
