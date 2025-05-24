import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import color from "../utils/color.js";
import "../index.css";

function LikeComponent() {
  const size = "text-sm sm:text-base md:text-lg bg-gray-200 cursor-pointer ";
  return (
    <div>
      <div className="flex justify-around items-center text-black">
        <button
          type="button"
          className={`flex items-center gap-1  py-2 px-3 border-black rounded-2xl ${size}`}
        >
          <FaThumbsUp className={size} size={color.textsize}  /> Like
        </button>
        <button
          type="button"
          className={`flex items-center gap-1  py-2 px-3  border-black rounded-2xl ${size}`}
        >
          <FaCommentAlt className={size} size={14} /> Comment
        </button>
        <button
          type="button"
          className={`flex items-center gap-1  py-2 px-3  border-black rounded-2xl ${size}`}
        >
          <FaShare className={size} size={color.textsize} /> Share
        </button>
      </div>
    </div>
  );
}

export default LikeComponent;
