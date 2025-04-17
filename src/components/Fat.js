import React, { useState } from "react";
import "./Fat.css"

const Fat = () => {
  const [calories, setCalories] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [fatIntake, setFatIntake] = useState(null);
  const [message, setMessage] = useState("");

  // Calculate Fat Intake
  const calculateFatIntake = () => {
    if (!calories || !fatPercentage || calories <= 0 || fatPercentage <= 0) {
      setMessage("Please enter valid values.");
      return;
    }

    const fatCalories = (calories * fatPercentage) / 100; // Fat calories from total calories
    const fatGrams = (fatCalories / 9).toFixed(2); // Convert calories to grams (1g fat = 9 kcal)

    setFatIntake(fatGrams);
    setMessage(`You should consume around ${fatGrams}g of fat per day.`);
  };

  // Reset Form
  const resetForm = () => {
    setCalories("");
    setFatPercentage("");
    setFatIntake(null);
    setMessage("");
  };

  return (
    <div className="fat">
    <div className="fat-calculator">
      <h1>Fat Intake Calculator</h1>

      {/* Input Fields */}
      <div className="types">
        
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          placeholder="Enter daily calorie intake"
        />
      </div>

      <div  className="types">
        <input
          type="number"
          value={fatPercentage}
          onChange={(e) => setFatPercentage(e.target.value)}
          placeholder="Enter fat percentage (e.g. 30)"
        />
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button onClick={calculateFatIntake}>Calculate</button>
        <button onClick={resetForm} className="reset">Reset</button>
      </div>

      {/* Display Result */}
      {fatIntake && (
        <div className="result">
          <h3>{message}</h3>
        </div>
      )}
    </div>
    </div>
  );
};

export default Fat;
