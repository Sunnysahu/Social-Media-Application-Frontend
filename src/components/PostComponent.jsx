import { useState } from "react";
import LikeComponent from "./LikeComponent.jsx";

function PostComponent({ images }) {
  const [text, setText] = useState(
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cumque et a nesciunt reiciendis dolor ullam voluptatum velit eaque mollitia illo repellendus repudiandae quam quidem saepe, deleniti ut tenetur nobis error. Tempore nostrum eligendi expedita dolore impedit quos dignissimos vel voluptatum id, hic similique in quasi accusantium animi dicta alias"
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded((prev) => !prev);
  const seeMoreButton = text.length > 150;
  const displayedText = isExpanded ? text : text.slice(0, 150);
  const size = "text-sm sm:text-base md:text-lg";

  return (
    <div className="px-[2vw] mb-4 flex flex-col items-start ml-[2vw] lg:items-center">
      <div
        className="w-full max-w-full lg:max-w-xl p-2 bg-gray-100 lg:w-[35vw] lg:border-2 rounded-lg"
        style={{ boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.5)" }}
      >
        {/* Top Section */}
        <div className="flex justify-between items-start flex-wrap">
          {/* Left Block: Username + Song + Date + Location */}
          <div className="flex items-end gap-[4vw] w-full lg:w-auto">
            <div className="flex flex-col gap-1">
              <div className="font-semibold text-sm">sunny.sahu_</div>
              <div className="text-xs text-gray-700">Brown Rang</div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-xs text-gray-600">20/07/1999</div>
              <div className="text-xs text-gray-600">India</div>
            </div>
          </div>
          <div className="text-xl mt-2 lg:mt-0">...</div>
        </div>

        {/* Post Text */}
        <div className="mt-3 text-gray-800 text-sm">
          <p>
            {displayedText}
            {seeMoreButton && !isExpanded && "..."}
          </p>
          {seeMoreButton && (
            <button
              onClick={toggleReadMore}
              className="text-blue-600 text-xs underline mt-1"
            >
              {isExpanded ? "See less" : "See more"}
            </button>
          )}
        </div>

        {/* Image Section */}
        <div className="w-full mt-2 mb-3">
          <img
            src={images ? images : "../../public/frontend.png"}
            alt="Post"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Like Component */}
        <LikeComponent />
      </div>
    </div>
  );
}

export default PostComponent;
