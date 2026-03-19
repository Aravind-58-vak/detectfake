import React, { useState } from "react";
import UploadCard from "./components/UploadCard";
import WebcamDetector from "./components/WebcamDetector";
import ResultCard from "./components/ResultCard";
import "./App.css";

function App() {

  const [result, setResult] = useState(null)

  return (

  <div className="app">

    <div className="header">

      <h1 className="main-title">
        💰🪙 Currency Shield Counterfiet Detection using CNN-Ml
      </h1>

      <p className="subtitle">
        
      </p>

    </div>

    <div className="dashboard">

      <UploadCard setResult={setResult} />
      <WebcamDetector setResult={setResult} />
      <ResultCard result={result} />

    </div>

  </div>

);
}

export default App;