import React, { useState } from "react";
import LikeComponent from "./LikeComponent.jsx";

function PostComponent({images}) {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cumque et a nesciunt reiciendis dolor ullam voluptatum velit eaque mollitia illo repellendus repudiandae quam quidem saepe, deleniti ut tenetur nobis error. Tempore nostrum eligendi expedita dolore impedit quos dignissimos vel voluptatum id, hic similique in quasi accusantium animi dicta alias"
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const seeMoreButton = text.length > 150;
  const displayedText = isExpanded ? text : text.slice(0, 150);
  const size = "text-sm sm:text-base md:text-lg";

  return (
    <div className="w-full min-w-[300px] px-[4vw]py-[1vw] pb-[10px] flex flex-col items-start lg:items-center">
      <div className="w-full max-w-2xl mt-4 p-2 bg-gray-100 shadow-2xl shadow-black/80 lg:w-[40vw] lg:border-2 rounded-lg">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          {/* Left Block: Username + Song + Date + Location */}
          <div className="flex items-end gap-[7vw] w-full">
            <div className="flex flex-col gap-1">
              <div className="font-semibold">sunny.sahu_</div>
              <div className="text-sm text-gray-700">Brown Rang</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-sm text-gray-600 ">20/07/1999</div>
              <div className="text-sm text-gray-600">India</div>
            </div>
          </div>
          <div className="text-xl">...</div>
        </div>
        {/* Post Text */}
        <div className="mt-4 text-gray-800">
          <p>
            {displayedText}
            {seeMoreButton && !isExpanded && "..."}
          </p>
          {seeMoreButton && (
            <button
              onClick={toggleReadMore}
              className="text-blue-600 text-sm underline mt-1"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>
        {/* // src="../../public/square.jpeg" */}
        <div className="w-full mt-[2vh] mb-[1.5vh]">
          <img
            src={images? images : "../../public/frontend.png"}
            // src="../../public/frontend.png"
            alt="Post"
            className="w-full h-auto object-contain"
          />
        </div>

        <LikeComponent />
      </div>
    </div>
  );
}

export default PostComponent;
