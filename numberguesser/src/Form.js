import React, { useState, useEffect } from "react";

const Button = (props) => {
  return (
    <button onClick={function () {
      props.setIfClicked(state => (true));
      console.log('actual',props.actualAnswer)
      console.log('input',props.inputNumber)

      if (props.actualAnswer == props.inputNumber) {
        props.setCompareAnswer(state => (true))
      } else {
        props.setCompareAnswer(state => (false))
      }
    }
    }
    >Check!</button>
  )
}

export default function Form(props) {
  return (
    <div className="input-your-guess">
      <form autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="guess-number"
          type="number"
          placeholder="Guess a number!"
          onChange={(event) => {
            props.setInputNumber(event.target.value)
          }
          }
          value={props.inputNumber}
          data-testid="number-input"
        />
      </form>
      <Button setIfClicked={props.setIfClicked} inputNumber={props.inputNumber} actualAnswer={props.actualAnswer} setCompareAnswer={props.setCompareAnswer}/>
    </div>
  )
}