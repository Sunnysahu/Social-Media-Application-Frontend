import "./App.css";

import { Routes, Route, Outlet } from "react-router-dom";

import HeaderComponent from "./components/HeaderComponent.jsx";

import HomePage from "./Pages/HomePage.jsx";
import FriendPage from "./Pages/FriendPage.jsx";
import LogoutPage from "./Pages/LogoutPage.jsx";

// https://react-icons.github.io/react-icons/icons/fa/

function App() {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <HeaderComponent />

        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/friends" element={<FriendPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
