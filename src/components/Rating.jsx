import { useState, useRef } from "react";
import { CiStar } from "react-icons/ci";
import "../styles/star-rating.css";

export const StartRating = () => {
  const [starRating, setStarRating] = useState([...Array(5).fill(false)]);

  const handleStarRating = (index) => {
    const updatedRating = starRating.map((value, i) => {
      if (i === index) {
        return !value;
      } else {
        return i < index ? true : false;
      }
    });

    setStarRating(updatedRating);
  };
  return (
    <div className="app_rating">
      <div className="wrapper">
        {starRating.map((value, index) => {
          return (
            <button
              className="star"
              key={index}
              onClick={() => {
                handleStarRating(index);
              }}>
              <CiStar size={30} fill={value ? "red" : ""} />
            </button>
          );
        })}
      </div>
    </div>
  );
};
