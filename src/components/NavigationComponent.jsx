import { NavLink } from "react-router-dom";

function NavigationComponent() {
  const activeClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-bold" : "text-gray-800";

  return (
    <div className="hidden lg:flex gap-4">
      <NavLink to="/home" className={activeClass}>Home</NavLink>
      <NavLink to="/friends" className={activeClass}>Friends</NavLink>
      <NavLink to="/feed" className={activeClass}>Feed</NavLink>
      <NavLink to="/notification" className={activeClass}>Notification</NavLink>
      <NavLink to="/about" className={activeClass}>About</NavLink>
      <NavLink to="/logout" className={activeClass}>Logout</NavLink>
    </div>
  );
}

export default NavigationComponent;
