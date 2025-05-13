import React, {useState} from "react";
import { FaAlignJustify } from "react-icons/fa";

function StoryLayoutComponent() {
      const [count, setCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  return (
    <div className="lg:hidden w-full min-w-[300px] flex items-center">
      <div className="flex overflow-x-auto">
        <div className="p-[3vw] flex flex-nowrap">
          {count.map((item) => (
            <div
              key={item}
              className="bg-amber-400 w-[15vw] h-[15vw] lg:w-[7vw] lg:h-[7vw] rounded-full border-2 border-white flex items-center justify-center mr-2.5 shrink-0"
            >
              <span className="text-[1vw] text-center truncate overflow-hidden">
                {"Story " + item}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mx-4 md:mx-8 lg:hidden">
        <button type="button" className="text-xl"><FaAlignJustify /></button>
      </div>
    </div>
  );
}

export default StoryLayoutComponent;
