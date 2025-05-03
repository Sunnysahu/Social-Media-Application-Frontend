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
    // fixed bottom, full width, hidden on md+ (>=768px)
    <div className="fixed inset-x-0 bottom-0 bg-gray-200 md:hidden z-50" 
         style={{ paddingBottom: "env(safe-area-inset-bottom)" }}>
      <div className="flex border-gray-300">
        {footer.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className="flex-1 flex flex-col items-center justify-center py-2 text-gray-700 text-[clamp(10px,2.5vw,14px)]"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default FooterComponent;
