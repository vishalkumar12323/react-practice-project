import { useState, useEffect, useRef } from "react";
import { MdUpload } from "react-icons/md";

export const DragAndDrop = () => {
  const [files, setFile] = useState([]);
  const [apiResponse, setApiResponse] = useState({ msg: "", length: 0 });
  const [error, setError] = useState("");

  const inputRef = useRef(null);

  async function handleChange(e) {
    const selectedFiles = e.target.files;
    setFile([...selectedFiles]);
  }

  function handleFileUpload() {
    if (inputRef.current) {
      console.log(inputRef.current.click());
    }
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
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            inputRef.current && inputRef.current.click();
          }}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // inputRef.current && inputRef.current.click();
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // inputRef.current && inputRef.current.click();
          }}
          onDragEnter={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // inputRef.current && inputRef.current.click();
          }}
          onClick={() => {
            inputRef.current && inputRef.current.click();
          }}>
          <input
            ref={inputRef}
            type="file"
            className="input_box"
            onChange={handleChange}
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
