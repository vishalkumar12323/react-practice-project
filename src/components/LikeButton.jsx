import { BiLike } from "react-icons/bi";
import { useState } from "react";
import "../styles/like-button.css";

export const LikeButton = ({ color = "red", borderColor = "red" }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <div className="button_container">
      <button
        className="button"
        style={isLiked ? { color, borderColor } : null}
        onClick={() => setIsLiked(!isLiked)}>
        {" "}
        <BiLike size={23} className={isLiked ? "icon" : ""} /> Like
      </button>
    </div>
  );
};
