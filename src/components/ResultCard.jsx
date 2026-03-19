import React from "react";

export default function ResultCard({ result }) {

  if (!result) {
    return (
      <div className="card">
        <h2>Prediction Result</h2>
        <p>No prediction yet</p>
      </div>
    )
  }

  const { label, confidence, gradcam } = result

  return (

    <div className="card">

      <h2>Prediction Result</h2>

      <h3 className={label === "Real" ? "real" : "fake"}>
        {label === "Real" ? "✔ Real Note" : "✖ Fake Note"}
      </h3>

      <p>Confidence: {(confidence * 100).toFixed(2)}%</p>

      <div className="progress">

        <div
          className="progress-bar"
          style={{ width: `${confidence * 100}%` }}
        ></div>

      </div>

      <h3>Grad-CAM Visualization</h3>

      {gradcam && (
        <img
          src={`http://127.0.0.1:5000/${gradcam}`}
          alt="GradCAM"
          className="gradcam"
        />
      )}

    </div>

  )
}