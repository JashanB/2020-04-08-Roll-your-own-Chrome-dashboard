import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import NumberSetter from './NumberSetter'
import Result from './Result'

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [range, setRange] = useState(10);
  const [compareAnswer, setCompareAnswer] = useState(false);
  const [actualAnswer, setActualAnswer] = useState(-1);
  const [ifClicked, setIfClicked] = useState(false);

  const makeRandomNumber = function (max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  useEffect(() => {
    let newNumber = makeRandomNumber(range);
    setActualAnswer(state => (newNumber));
  }, [range, ifClicked]);

  return (
    <div className="App">
      <h2>Need a break?</h2>
      <h3> Guess a number out of {range}</h3>
      <Form
        ifClicked={ifClicked}
        setIfClicked={setIfClicked}
        actualAnswer={actualAnswer}
        compareAnswer={compareAnswer}
        setCompareAnswer={setCompareAnswer}
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
        range={range}
      />
      <NumberSetter
        makeRandomNumber={makeRandomNumber}
        range={range}
        setRange={setRange}
      />
      {ifClicked &&
        <h4>Answer:</h4> &&
        <Result
          actualAnswer={actualAnswer}
          compareAnswer={compareAnswer}
          setIfClicked={setIfClicked}
          range={range}
          setRange={setRange}
        />}
    </div>
  );
}

export default App;
