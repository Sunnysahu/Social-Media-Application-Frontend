import "./App.css";

import { Routes, Route } from "react-router-dom";

import MainComponent from "./components/MainComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import StoryLayoutComponent from "./components/StoryLayoutComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import NewPostComponent from "./components/NewPostComponent.jsx";

import LogoutPage from "./Pages/LogoutPage.jsx";


// https://react-icons.github.io/react-icons/icons/fa/

function App() {
  return (
    <>
      <div className="flex flex-col h-screen ">
        <HeaderComponent />
        <StoryLayoutComponent />
        <NewPostComponent />
        <MainComponent />
        <Routes>
        <Route path="/" />
        <Route path="/logout" element={<LogoutPage />} />
      </Routes>
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
