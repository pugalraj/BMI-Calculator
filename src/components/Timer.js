import React, { useState, useEffect } from "react";
import "./Timer.css"

const Timer = () => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("stopwatch"); // "stopwatch" or "countdown"

  // Handle timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => (mode === "countdown" ? prevTime - 1 : prevTime + 1));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning, mode]);

  // Format time to HH:MM:SS
  const formatTime = (seconds) => {
    const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div className="time">
    <div id="align" style={{ textAlign: "center", padding: "20px", fontFamily: "Arial",  color:'white'}}>
      <h1>{mode === "stopwatch" ? "STOPWATCH" : "Countdown Timer"}</h1>
      <h2>{formatTime(time)}</h2>

      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setTime(0)}>Reset</button>
      <button
        onClick={() => setMode(mode === "stopwatch" ? "countdown" : "stopwatch")}
      >
        Switch to {mode === "stopwatch" ? "Countdown" : "Stopwatch"}
      </button>

      {mode === "countdown" && (
        <input
          type="number"
          placeholder="Set countdown (seconds)"
          onChange={(e) => setTime(Number(e.target.value))}
        />
      )}
    </div>
    </div>
  );
};

export default Timer;
