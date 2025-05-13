import MainComponent from "../components/MainComponent.jsx"
import HeaderComponent from "../components/HeaderComponent.jsx";
import StoryLayoutComponent from "../components/StoryLayoutComponent.jsx";
import FooterComponent from "../components/FooterComponent.jsx";
import NewPostComponent from "../components/NewPostComponent.jsx";

function HomePage() {
  return (
    <>
      <StoryLayoutComponent />
      <NewPostComponent />
      <MainComponent />
      <FooterComponent />
    </>
  );
}

export default HomePage;
