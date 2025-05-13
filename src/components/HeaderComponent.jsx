

import { FaBell, FaRocketchat  } from "react-icons/fa";
import NavigationComponent from "./navigationComponent";

import color from "../utils/color";


function HeaderComponent() {
  return (
    <div className="w-full min-w-[300px]">
      <div className=" flex justify-between items-center px-[3vw] pt-[6vw] lg:p-[2vw]">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/375px-Google_2015_logo.svg.png"
          alt="Website Logo"
          className="w-[40vw] h-auto sm:w-40 md:w-48 lg:w-56 xl:w-64"
        />
        <NavigationComponent />
        <div className="flex text-white text-[7vw] gap-8 lg:text-[2.5vw]">
          <button type="button"><FaBell color={color.black}/></button>
          <button type="button"><FaRocketchat color={color.black} /></button>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
