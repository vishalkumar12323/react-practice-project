import { BiLike } from "react-icons/bi";
import { useState, useEffect } from "react";
import "../styles/like-button.css";

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleLikeUnLike() {
    setIsLoading(true);
    setError(null);
    try{
      const res = await fetch('https://www.greatfrontend.com/api/questions/like-button',
       {
        method: "POST", 
        headers:{
              'Content-Type': 'application/json'
            }, 
        body: JSON.stringify({action: isLiked ? 'unlike' : 'like'})});

        if(res.ok) {
          setIsLiked(true);
        }else {
          const err = await res.json();
          setError(err.message);
          setIsLiked(false);
        }
    }finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="button_container">
      <button
        className={`button ${isLiked ? 'liked': 'unliked'}`} onClick={handleLikeUnLike}
        disabled={isLoading}
        >
        {" "}
        {
          !isLoading ? (
            <>
              <BiLike size={23} className={isLiked ? "icon" : ""} /> Like
            </>
          ) : (
            <>
              <span>Loading...</span>
            </>
          )
        }
      </button>

      {
        error && <span>{error}</span>
      }
    </div>
  );
};
