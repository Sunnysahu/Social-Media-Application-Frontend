import { useNavigate } from "react-router-dom";
import {
  FaHome,
  FaSearch,
  FaListAlt,
  FaSignOutAlt,
  FaUserFriends,
  FaInfoCircle,
} from "react-icons/fa";

function FooterComponent() {
  const navigate = useNavigate();

  const footer = [
    { label: "Home", icon: <FaHome />, to: "/home" },
    { label: "Friends", icon: <FaUserFriends />, to: "/friends" },
    { label: "Search", icon: <FaSearch /> },
    { label: "Feed", icon: <FaListAlt /> },
    { label: "About", icon: <FaInfoCircle />, to: "/about" },
    { label: "Logout", icon: <FaSignOutAlt />, to: "/logout" },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 bg-gray-200 md:hidden z-50">
      <div className="flex border-t border-gray-300">
        {footer.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => item.to && navigate(item.to)}
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
