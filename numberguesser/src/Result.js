import React from "react";

const Button = (props) => {
  return (
    <button onClick={() => props.setIfClicked(state => (false))
    }
    >Try Again!</button>
  )
}

export default function Result (props) {
  return (
    <div className="result">
      {props.compareAnswer ? <h3>YOU DID IT! Answer was {props.actualAnswer}</h3> : <h3>Nooo wrong this time. Answer was {props.actualAnswer}</h3>}
      <Button setIfClicked={props.setIfClicked}/>
    </div>
  )
};