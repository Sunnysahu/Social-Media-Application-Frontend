import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import PostComponent from "./components/PostComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import StoryLayoutComponent from "./components/StoryLayoutComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";

// https://react-icons.github.io/react-icons/icons/fa/


function App() {


  return (
    <>
      <div className="flex flex-col h-screen ">
        <HeaderComponent />
        <StoryLayoutComponent />
        <PostComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
