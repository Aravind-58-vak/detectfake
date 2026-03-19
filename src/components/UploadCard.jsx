import React, { useState } from "react";
import axios from "axios";

export default function UploadCard({ setResult }) {

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {

    const selected = e.target.files[0];

    setFile(selected);

    if (selected) {
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = async () => {

    if (!file) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      formData
    );

    setResult(response.data);
  };

  return (

    <div className="card">

      <h2>Upload Currency Image</h2>

      <input type="file" onChange={handleChange} />

      {preview && (
        <img
          src={preview}
          alt="preview"
          className="preview"
        />
      )}

      <button onClick={handleUpload}>
        Detect
      </button>

    </div>

  );
}