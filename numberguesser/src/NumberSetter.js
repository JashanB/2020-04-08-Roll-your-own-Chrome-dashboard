import React, { useState } from "react";


export default function NumberSetter (props) {
  return (
    <form autoComplete="off" onSubmit={event => event.preventDefault()}>
      <input
        className="number-setter"
        type="number"
        placeholder="Guess a number!"
        onChange={(event) => {
          props.setDefaultNum(event.target.value)
        }
        }
        value={props.defaultNum}
        data-testid="number-setter-form"
      />
    </form>
  )
};