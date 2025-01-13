import { useState, useEffect, useRef } from "react";
import { MdUpload } from "react-icons/md";

export const FileDropZone = (props) => {
  const [files, setFile] = useState([]);
  const [backgroundCount, setBackgroundCount] = useState(0);

  const inputRef = useRef(null);

  function handleInputChange(e) {
    const selectedFiles = e.target.files;
    setFile([...selectedFiles]);
  }

  function handleFileUpload(e) {
    e.stopPropagation();
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  function handleDrop(e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (inputRef.current) {
      const dataTransfer = new DataTransfer();
      Array.from(files).forEach((file) => dataTransfer.items.add(file));
      inputRef.current.files = dataTransfer.files;

      const changeEvent = new Event("change", { bubbles: true });
      inputRef.current.dispatchEvent(changeEvent);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }
  useEffect(() => {
    if (files && files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        props.setBackground(e.target.result);
      };

      reader.readAsDataURL(files[backgroundCount]);
    }
  }, [files, backgroundCount]);
  return (
    <div className="container">
      {files && files.length > 0 && (
        <div className="previous">
          <button
            style={
              backgroundCount <= 0
                ? {
                    cursor: "not-allowed",
                    backgroundColor: "#aaaaaa",
                  }
                : null
            }
            disabled={backgroundCount <= 0}
            onClick={() => {
              if (backgroundCount <= files.length - 1 && backgroundCount >= 0) {
                setBackgroundCount(backgroundCount - 1);
              } else {
                return;
              }
            }}
            className="previous_btn">
            <span>Previous image</span>
          </button>
        </div>
      )}

      <div
        className={`upload_box`}
        style={
          !props.background
            ? { boxShadow: "1px 1px 10px 5px #c4c1c1" }
            : { border: "1px solid #929292", backgroundColor: "#ebebebb3" }
        }>
        <div
          className="upload_btn_box"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleFileUpload}>
          <input
            ref={inputRef}
            type="file"
            className="input_box"
            onChange={handleInputChange}
            accept="image/jpeg, image/png, image/webp, image/svg+xml"
            id="id"
            multiple
          />
          <button className="btn" type="button" onClick={handleFileUpload}>
            {" "}
            <MdUpload size={20} /> <span>Upload files</span>{" "}
          </button>

          <span className="text">or drag and drop it here</span>
        </div>
      </div>

      {files && files.length > 0 && (
        <div className="next">
          <button
            style={
              backgroundCount >= files.length - 1
                ? {
                    cursor: "not-allowed",
                    backgroundColor: "#aaaaaa",
                  }
                : null
            }
            disabled={backgroundCount >= files.length - 1}
            onClick={() => {
              if (files.length - 1 > backgroundCount) {
                setBackgroundCount(backgroundCount + 1);
              } else {
                return;
              }
            }}
            className="next_btn">
            <span>Next image</span>
          </button>
        </div>
      )}
    </div>
  );
};
