import { useState } from "react";
import { FileDropZone } from "./components/FileDropZone.jsx";
import "./index.css";

export function App() {
  const [background, setBackground] = useState();
  return (
    <main
      style={
        background
          ? {
              backgroundImage: `url(${background})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }
          : { background: "transparent" }
      }
      className="parent">
      <FileDropZone background={background} setBackground={setBackground} />
    </main>
  );
}
