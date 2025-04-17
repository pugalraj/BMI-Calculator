import React, { useState } from "react";
import "./Water.css"

const Water = () => {
  const [number, setNumber] = useState("");
  const [randomText, setRandomText] = useState("");

  const texts = [
    "Keep it Up",
    "Hydration is Awesome!",
    "Drink some more",
    "Very Good!...",
    "Keep pushing forward!",
    "Success!",
  ];

  const generateText = (num) => {
    if (!num || isNaN(num) || num <= 0) {
      setRandomText("Please enter a valid number!");
      return;
    }
    let randomIndex = (num * Math.floor(Math.random() * texts.length)) % texts.length;
    setRandomText(texts[randomIndex]);
  };

  return (
    <div id="back">
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Check your hydration</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter how many glass of water you drunk....."
      />
      <button onClick={() => generateText(Number(number))}>Check</button>
      <p style={{ marginTop: "10px", fontWeight: "bold" }}>{randomText}</p>
    </div>
    </div>
  );
};

export default Water;
