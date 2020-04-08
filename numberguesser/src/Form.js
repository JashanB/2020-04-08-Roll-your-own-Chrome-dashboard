import React, { useState } from "react";

export default function Form(props) {
  // const [number, setNumber] = useState(0)
  return (
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="guess-number"
        name={props.name}
        type="number"
        placeholder="Guess a number!"
        onChange={(event) => {
          props.setNumber(event.target.value)
        }
        }
        value={props.number}
        data-testid="number-input"
      />
    </form>
  )
}