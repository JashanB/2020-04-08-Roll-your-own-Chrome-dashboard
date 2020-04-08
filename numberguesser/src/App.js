import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import NumberSetter from './NumberSetter'

function App() {
  const [number, setNumber] = useState(0)
  const makeRandomNumber = function (max) {
    return Math.floor(Math.random() * Math.floor(max))
  };
  setTimeout(function() {console.log('number', number)}, 1000)

  return (
    <div className="App">
     <h2>Need a break? Guess a number!</h2>
     <Form number={number} setNumber={setNumber}/>
     <NumberSetter makeRandomNumber={makeRandomNumber} />
    </div>
  );
}

export default App;
