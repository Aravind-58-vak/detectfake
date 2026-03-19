import React, { useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

export default function WebcamDetector({ setResult }) {

  const webcamRef = useRef(null);

  const capture = async () => {

    const imageSrc = webcamRef.current.getScreenshot();

    const blob = await fetch(imageSrc).then(res => res.blob());

    const formData = new FormData();
    formData.append("file", blob, "webcam.jpg");

    const response = await axios.post(
      "http://127.0.0.1:5000/predict",
      formData
    );

    setResult(response.data);
  };

  return (

    <div className="card">

      <h2>Live Webcam Detection</h2>

      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={250}
      />

      <button onClick={capture}>
        Capture & Detect
      </button>

    </div>

  );
}