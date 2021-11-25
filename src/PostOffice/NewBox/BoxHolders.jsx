import React, { useState } from "react"

const BoxHolders = (props) => {
  console.log(props)

  return (
    <div>
      <h4>Box Holders:</h4>
      
      {props.boxHolders.map((name, idx) => (
        <p key={idx}>{name}</p>
      ))}
    </div>
  )
}

export default BoxHolders