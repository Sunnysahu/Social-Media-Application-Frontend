import { useState } from "react";

import StoryLeftComponent from "./StoryLeftComponent";
import OnlineLayoutComponent from "./OnlineLayoutComponent";

import PostComponent from "./PostComponent";
function MainComponent() {
  return (
    <div className="w-full  flex flex-row">
      <StoryLeftComponent />
      <div>
        <PostComponent images={"../../public/square.jpeg"} />
        <PostComponent images={"../../public/frontend.png"} />

        <PostComponent images={"../../public/vite.svg"} />
      </div>
      {/* <StoryLayoutComponent /> */}
      <OnlineLayoutComponent />
    </div>
  );
}

export default MainComponent;
