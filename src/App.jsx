import "./App.css";


import MainComponent from "./components/MainComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import StoryLayoutComponent from "./components/StoryLayoutComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import NewPostComponent from "./components/NewPostComponent.jsx";

// https://react-icons.github.io/react-icons/icons/fa/


function App() {


  return (
    <>
      <div className="flex flex-col h-screen ">
        <HeaderComponent />
        <StoryLayoutComponent/>
        <NewPostComponent />
        <MainComponent />
        <FooterComponent />
      </div>
    </>
  );
}

export default App;
