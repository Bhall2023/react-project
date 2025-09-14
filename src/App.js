import React from "react";
import Weather from "./Weather"; 
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


export default function App() {
  return <div className="App">
    <div className="container">
      <Weather />
    
  <footer>
  This project was coded by <a href = "https://www.shecodes.io/graduates/162107-bonnie-hall" target="_blank" rel="noopener noreferrer">Bonnie Hall</a> and is open-sourced on {" "}
  <a href = "https://github.com/Bhall2023/react-project" target="_blank" rel="noopener noreferrer">GitHub</a>
  </footer>
  </div>
  </div>
}

