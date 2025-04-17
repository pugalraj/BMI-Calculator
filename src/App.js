// import logo from './logo.svg';
// import './App.css';
// import Location from './components/Location';
// import Location2 from './components/Location2';
// import LoginPage from './components/LoginPage';
// function App() {
//   return (
//     <div className="App">
//       {/* <Location />
//       <Location2 /> */}
//       <LoginPage />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Location from "./components/Location";
import Grid from "./components/Grid";
import Location2 from "./components/Location2";
import Healthy from "./components/Healthy";
import Fat from "./components/Fat";
import Timer from "./components/Timer";
import About from "./components/About";
import Exercise from "./components/Exercise";
import Water from "./components/Water";

function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/grid" element={<Grid /> } />
        <Route path="/location" element={<Location /> } />
        <Route path="/location2" element={<Location2 />} />
        <Route path="/healthy" element={<Healthy />} />
        <Route path="/fat" element={<Fat />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/about" element={<About />} />
        <Route path="/exercise" element={<Exercise/>} />
        <Route path="/water" element={<Water/>} />

       </Routes>
    </Router>

    </div>
 
  );
}


export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
// import LoginPage from "./components/LoginPage";
// import Grid from './components/Grid';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginPage />} /> {/* Login page as the home route */}
//         <Route path="/grid" element={<Grid />} /> {/* Grid page */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;


