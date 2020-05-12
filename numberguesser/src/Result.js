import React from "react";

// const Button = (props) => {
//   return (
//     <button onClick={() => props.setCheckAnswer(state => (false))
//     }
//     >Try Again!</button>
//   )
// }

const Button = (props) => {
  return (
    <button onClick={function () {
      props.setCheckAnswer(state => (false));
      props.setInputNumber(state => 0);
      props.restart ? props.setRestart(state => false) : props.setRestart(state => true)
    }
    }
    >Try Again!</button>
  )
};


export default function Result (props) {
  return (
    <div className="result">
      {props.compareAnswer ? <h3>YOU DID IT! Answer was {props.actualAnswer}</h3> : <h3>Nooo wrong this time. Answer was {props.actualAnswer}</h3>}
      <Button restart={props.restart} setCheckAnswer={props.setCheckAnswer} setRestart={props.setRestart} setInputNumber={props.setInputNumber}/>
    </div>
  )
};