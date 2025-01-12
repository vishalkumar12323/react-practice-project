import { useState, useEffect, useRef } from "react";
import { MdUpload } from "react-icons/md";

export const FileDropZone = () => {
  const [files, setFile] = useState([]);

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
    console.log(files);
  }, [files]);
  return (
    <div className="container">
      <div className="upload_box">
        <div className="img_box">
          <img src="/upload-icon.png" alt="upload image" className="img" />
        </div>
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
            accept="image/jpeg, image/png, image/webp"
            id="id"
          />
          <button className="btn" type="button" onClick={handleFileUpload}>
            {" "}
            <MdUpload size={20} /> <span>Upload files</span>{" "}
          </button>

          <span className="text">or drag and drop it here</span>
        </div>
      </div>
    </div>
  );
};
