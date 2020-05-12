import React, { useState } from "react";


export default function NumberSetter (props) {
  return (
    <div className="set-your-number">
    <h3>Change the range: </h3>
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="number-setter"
        type="number"
        placeholder="Guess a number!"
        onChange={(event) => {
          props.setRange(event.target.value)
        }
        }
        value={props.range}
        data-testid="number-setter-form"
      />
    </form>
    </div>
  )
};