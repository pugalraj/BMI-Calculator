import React from "react";
import "./Healthy.css"
const Healthy = () => {
  // Healthy and Non-Healthy Foods
  const healthyFoods = [
    "Fruits (Apples, Bananas, Oranges)",
    "Vegetables (Spinach, Carrots, Broccoli)",
    "Lean Meat (Chicken, Fish)",
    "Nuts & Seeds",
    "Whole Grains (Brown Rice, Oats)",
    "Dairy (Milk, Yogurt, Cheese)",
  ];

  const nonHealthyFoods = [
    "Fast Food (Burgers, Fries, Pizza)",
    "Sugary Drinks (Soda, Energy Drinks)",
    "Processed Snacks (Chips, Cookies)",
    "Deep-Fried Foods",
    "Artificial Sweeteners",
    "Excessive Alcohol",
  ];

  return (
    <div className="fus">
    <div className="food-container">
      <h1>Healthy & Non-Healthy Foods</h1>

      <div className="food-grid">
        {/* Healthy Foods Section */}
        <div className="food-category healthy">
          <h2>Healthy Foods ✅</h2>
          <ul>
            {healthyFoods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>

        {/* Non-Healthy Foods Section */}
        <div className="food-category unhealthy">
          <h2>Non-Healthy Foods ❌</h2>
          <ul>
            {nonHealthyFoods.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Healthy;
