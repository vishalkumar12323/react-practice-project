import { useEffect, useState } from "react";
import "../styles/circle.css";

export const Circle = () => {
  const [circlePosition, setCirclePosition] = useState({
    top: 0,
    left: 0,
  });

  useEffect(() => {
    document.getElementById("root").addEventListener("mousemove", (e) => {
      setCirclePosition({ top: e.clientY, left: e.clientX });
    });
  }, [circlePosition.top, circlePosition.left]);

  return (
    <>
      <div
        className="circle"
        style={{
          top: circlePosition.top - 25,
          left: circlePosition.left - 25,
        }}></div>
    </>
  );
};
