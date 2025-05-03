import React from "react";
import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import color from "../utils/color.js";


function LikeComponent() {
  return (
    <div>
      <div className=" flex justify-around items-center text-black">
        <button type="button" className="flex items-center gap-1">
          <FaThumbsUp color={color.black} /> Like
        </button>
        <button type="button" className="flex items-center gap-1 text-black">
          <FaCommentAlt color={color.black} /> Comment
        </button>
        <button type="button" className="flex items-center gap-1 text-black">
          <FaShare color={color.black} /> Share
        </button>
      </div>
    </div>
  );
}

export default LikeComponent;
