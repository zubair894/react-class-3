import logo from './logo.svg';
import React from "react";
import './App.css';
import Students from './students.js';
import Mediacard from './Mediacard'

function App() {
  return (
    <div className="App">
      <h1>I am render by parent element</h1>
      <div className="a">
      <Students  Name="Zubair shaikh" fatherName="shamim ahmed shaikh" age="20" course="react"/>
      </div>
      <div className="b">
      <Students  Name="Owais Shaikh" fatherName="Shamim Ahmed shaikh" age="18" course="HTML/CSS"/>
      </div>
      <div className="c">
      <Students  Name="Syed Anas" fatherName="Khalid" age="22" course="Angular"/>
      </div>
      <div className="a">
      <Students  Name="Syed Hunain" fatherName="Khalid" age="20" course="python"/>
      </div>
   
     
    </div>
  );
}

export default App;
