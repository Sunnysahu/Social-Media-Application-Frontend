import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { FaAlignJustify } from "react-icons/fa"; 
// https://react-icons.github.io/react-icons/icons/fa/

import PostComponent from "./components/PostComponent.jsx";



function App() {
  const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <>
      <div className="flex flex-col  h-screen ">
        {" "}
        {/* justify-between  */}
        <div className="w-full bg-green-400">
          <div className=" flex justify-between items-center p-[6vw] lg:p-[2vw]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png"
              alt="Website Logo"
              className="w-[40vw] h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64"
            />
            <div className="flex gap-4 text-white bg-red-400 text-[5vw]">
              <p>Noti</p>
              <p>Msg</p>
            </div>
          </div>
        </div>
        <div className="bg-green-100 w-full flex items-center">
          <div className="flex overflow-x-auto">
            <div className="p-3 flex flex-nowrap">
              {count.map((item) => (
                <div
                  key={item}
                  className="bg-amber-400 w-[10vw] h-[10vw] rounded-full border-2 border-white flex items-center justify-center mr-2.5 shrink-0"
                >
                  <span className="text-[2vw] text-center truncate overflow-hidden">
                    {"Story " + item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-1 md:mx-8">        <FaAlignJustify />
</div>
        </div>
        {/* Post Layout */}
        <PostComponent />
        <div className="bg-blue-300 w-full">
          <h1>Hello</h1>
          <h1>sunny</h1>
          <h1>How</h1>
          <h1>are</h1>
          <h1>you</h1>
        </div>
      </div>
    </>
  );
}

export default App;
