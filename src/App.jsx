import "./App.css";

import { Routes, Route, Outlet, useLocation } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent.jsx";

import HomePage from "./Pages/HomePage.jsx";
import FriendPage from "./Pages/FriendPage.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import LogoutPage from "./Pages/LogoutPage.jsx";

// https://react-icons.github.io/react-icons/icons/fa/

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";
  return (
    <>
      <div className="flex flex-col h-screen ">
      {!isLoginPage && <HeaderComponent />}
      <hr className="mt-3 lg:mt-0 lg:pb-4 mx-[1vw]" />
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />} />
          <Route path="/friends" element={<FriendPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          // More Routes
        </Routes>
      </div>
    </>
  );
}

export default App;
