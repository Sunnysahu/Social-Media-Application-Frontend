import React, { useState } from "react";
import LikeComponent from "./LikeComponent.jsx";
import StorylayoutPCComponent from "./StorylayoutPCComponent.jsx";
import OnlineComponent from "./OnlineComponent.jsx";

function PostComponent() {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cumque et a nesciunt reiciendis dolor ullam voluptatum velit eaque mollitia illo repellendus repudiandae quam quidem saepe, deleniti ut tenetur nobis error. Tempore nostrum eligendi expedita dolore impedit quos dignissimos vel voluptatum id, hic similique in quasi accusantium animi dicta alias"
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const seeMoreButton = text.length > 150;
  const displayedText = isExpanded ? text : text.slice(0, 150);

  return (
    <div className="w-full px-[2vw] py-[2vw] pb-[70px] flex flex-row items-start">
      {/* Left Sidebar - Story */}
      <div className="hidden lg:flex w-[27%] bg-red h-[50%]">
        <StorylayoutPCComponent />
      </div>

      {/* Center Content */}
      <div>
        <div className="flex-grow p-2 lg:border-2 shadow-lg rounded-lg max-w-2xl">
          <div className="flex justify-between items-start">
            <div className="flex items-end gap-[7vw]">
              <div className="flex flex-col gap-1">
                <div className="font-semibold">sunny.sahu_</div>
                <div className="text-sm text-gray-700">Brown Rang</div>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-sm text-gray-600">20/07/1999</div>
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

          {/* Image */}
          <div className="w-full mt-[2vh] mb-[1.5vh]">
            <img
              src="../../public/square.jpeg"
              alt="Post"
              className="w-full h-auto object-contain"
            />
          </div>

          <LikeComponent />
        </div>
      </div>

      {/* Right Sidebar - Online */}
      <div className="hidden lg:flex w-[27%] h-[50%]">
        <OnlineComponent />
      </div>
    </div>
  );
}

export default PostComponent;
