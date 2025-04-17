import React from "react";
import "./Grid.css";
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();

  return (
    <div className="full">
      <div className="button-container">
        <h1>BMI Calculator</h1>
        <button className="button" onClick={() => navigate("/location")}>
          <h3>BMI CALCULATOR</h3>
        </button>
        <button className="button" onClick={() => navigate("/exercise")}>
          <h3>EXERCISE</h3>
        </button>
        <button className="button" onClick={() => navigate("/healthy")}>
          <h3>HEALTHY OR UNHEALTHY</h3>
        </button>
        <br />
        <button className="button" onClick={() => navigate("/fat")}>
          <h3>FAT CALCULATOR</h3>
        </button>
        <button className="button" onClick={() => navigate("/timer")}>
          <h3>STOP WATCH</h3>
        </button>
        <button className="button" onClick={() => navigate("/water")}>
          <h3>HYDRATE</h3>
        </button>
        <br />
        <button className="button" onClick={() => navigate("/about")}>
          <h3>TERMS AND CONDITIONS</h3>
        </button>
      </div>
    </div>
  );
};

export default Grid;
