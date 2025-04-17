import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Hook for navigation
import "./LoginPage.css"
// import bg from "/my-app/public/Images/background3.jpg"

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation logic
    if (username === ""  && password === "") {
      setErrorMessage("");
      navigate("/grid"); // Redirect to the dashboard page 
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return ( 

  //   <video autoPlay loop muted playsInline className="video-background">
  //   <source src="/my-app/public/vdeo.mp4" type="video/mp4" />
  //   Your browser does not support the video tag.
  //  </video>
  <div id="bg" style={{height:'100vh',width:'100wh'}}>
    <div className="login-container" >
      <h2>Login</h2>
      <form >
        <div className="input-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit"  id="btn" onClick={() => navigate("/grid")}>Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>

    </div>
  );
}


export default LoginPage;
