import React, { useState } from "react";
import "./Location2.css"


// const mystyle= {
//   textAlign:"center"
// };


function Location2() {
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");
  const [foods, setFoods] = useState([]);

  const healthyFoods = {
  
    underweight: ["Nuts and seeds", "Whole-grain bread"],
    overweight: ["Leafy greens", "Fruits"],
  };

  const unhealthyFoods = {
    underweight: ["Sugary drinks", "Fast food"],
    overweight: ["Fried food", "Processed snacks"],
  };

  const calculateCategory = () => {
    const bmiValue = parseFloat(bmi);

    if (isNaN(bmiValue) || bmiValue <= 0) {
      alert("Please enter a valid BMI.");
      return;
    }

    if (bmiValue < 18.5) {
      setCategory("Underweight");
      setFoods({
        
        healthy: healthyFoods.underweight,
        unhealthy: unhealthyFoods.underweight,
      });
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setCategory("Normal weight");
      setFoods({});
    } else {
      setCategory("Overweight");
      setFoods({
        healthy: healthyFoods.overweight,
        unhealthy: unhealthyFoods.overweight,
      });
    }
  };

  const resetForm = () => {
    setBmi("");
    setCategory("");
    setFoods([]);
  };

  return (
    <div className="whole">
   
    <div className="head">
    <h1>CALCULATE YOUR BMI AND CHECK YOU ARE FIT OR NOT FIT</h1>
      {/* BMI Input */}
      <div className="name">
        <h2>ENTER YOUR BMI: </h2>
        <input
          type="number"
          value={bmi}
          onChange={(e) => setBmi(e.target.value)}
          placeholder="Enter your BMI"
        />
      </div>

      {/* Buttons */}
      <div  className="btn"style={{ marginBottom: "20px" }}>
        <button
          onClick={calculateCategory}
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
          }}
        >
          Get Recommendations
        </button>
        <button 
          onClick={resetForm}
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </div>

      {/* Display Results */}
      {category && (
        <div className="para">
          <h1>BMI Category: {category}</h1>
          {category === "Normal weight" ? (
            <p>You are in a healthy weight range. Maintain a balanced diet!</p>
          ) : (
            <div>
              <center>
              <h1>Healthy Foods:</h1>
              <center>
              
                {foods.healthy.map((food, index) => (
                <h3 style={{color:'white'}}>{food}</h3>
                ))}
              
              </center>
              
              <h1>Unhealthy Foods to Avoid:</h1>
      
                {foods.unhealthy.map((food, index) => (
                <h3 style={{color:'white'}}>{food}</h3>
                ))}
              
              
              </center>
            </div>
          )}
        </div>
      )}
    </div>
    </div>
  );
}

export default Location2;
