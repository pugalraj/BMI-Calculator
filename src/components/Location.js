import React, { useState } from 'react';
// import Location2 from './Location2';
import "./Location.css"
import { useNavigate } from 'react-router-dom';


function Location() {
  // State variables
    const navigate = useNavigate();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  // Calculate BMI
  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      setMessage('Please enter valid weight and height.');
      return;
    }

    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = (weight / (heightInMeters ** 2)).toFixed(2); // BMI formula
    setBmi(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setMessage('You are underweight.');
    }  else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setMessage('You are in the normal weight range.');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are in the obese range.');
    }
  };

  // Reset the form
  const resetForm = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className='locate'>
    <div  id="first" style={{ marginLeft:'100px', fontFamily: 'Arial, sans-serif',  height:'300px', width:'500px',backgroundColor:'transparent', borderRadius:'25px'}}>
      <h1>BMI Calculator</h1>

      {/* Weight Input */}
      <div className='first'>
        {/* <label>Weight (kg): </label> */}
        <input style={{height:'10px', width:'300px'}}
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter your weight"
        
        />
      </div>

      {/* Height Input */}
      <div className='second'>
        {/* <label>Height (cm): </label> */}
        <input style={{height:'10px', width:'300px'}}
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter your height"
        />
      </div>

      {/* Buttons */}
      <div  className="btn1" style={{ marginBottom: '20px', textAlign:'center' }}>
        <button
          onClick={calculateBMI}
          style={{
            padding: '10px 20px',
            backgroundColor: 'black',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
             width: '200px',
            height:'50px'
          }}
        >
          Calculate BMI
        </button>
        <button  className="btn2"
          onClick={resetForm}
          style={{
            padding: '10px 20px',
            backgroundColor: '#6c757d',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
            width: '200px',
            height:'50px'
          }}
        >
          Reset
        </button>
        <button className='btn3' onClick={() => navigate("/location2")}>For Fitcheck</button>

      </div>

      {/* Display BMI Result */}
      {bmi && (
        <div style={{color:'white', marginTop:'55%', float:'left', backgroundColor:'grey', borderRadius:'10px'}}>
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
          {/* <button className='btn3' onClick={() => navigate("/location2")}>For Fitcheck</button> */}
        
    </div>
    </div>
  );
}

export default Location
