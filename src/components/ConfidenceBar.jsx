import React from "react";

export default function ConfidenceBar({ confidence }) {

  return (

    <div style={{
      width: "100%",
      height: "10px",
      background: "#ddd",
      borderRadius: "5px"
    }}>

      <div style={{
        width: `${confidence * 100}%`,
        height: "100%",
        background: "green",
        borderRadius: "5px"
      }} />

    </div>

  );
}