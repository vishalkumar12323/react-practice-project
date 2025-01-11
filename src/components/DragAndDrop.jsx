import { useState, useEffect } from "react";

export const DragAndDrop = () => {
  const [files, setFile] = useState([]);
  const [apiResponse, setApiResponse] = useState({ msg: "", length: 0 });
  const [error, setError] = useState("");

  async function handleChange(e) {
    const selectedFiles = e.target.files;
    setFile([...selectedFiles]);
  }
  return (
    <div className="container">
      <div className="upload_box">
        <input
          type="file"
          className="input_box"
          onChange={handleChange}
          accept="image/jpeg, image/png, image/webp"
          id="id"
        />
      </div>
    </div>
  );
};
