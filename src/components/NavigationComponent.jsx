import { NavLink } from "react-router-dom";

function NavigationComponent() {
  const navmenu = [
    { to: "/home", title: "Home" },
    { to: "/friends", title: "Friends" },
    { to: "/feed", title: "Feed" },
    { to: "/notification", title: "Notification" },
    { to: "/about", title: "About" },
    { to: "/logout", title: "Logout" },
  ];

  return (
    <div className="hidden lg:flex justify-center gap-[4vw] text-[clamp(12px,2vw,20px)] whitespace-nowrap overflow-hidden">
      {navmenu.map((item, index) => (
        <NavLink
        key={index}
        to={item.to}
        className={({ isActive }) =>
          `relative px-2 pb-1 whitespace-nowrap text-base sm:text-lg 
           transition-all duration-300 
           ${isActive
             ? "text-black/70 font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-green-500 after:rounded-full after:transition-all after:duration-1000"
             : "text-gray-800 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[3px] after:bg-transparent after:transition-all after:duration-300"}`
        }
      >
        {item.title}
      </NavLink>
      
      ))}
    </div>
  );
}

export default NavigationComponent;
