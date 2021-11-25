import React from "react"

const BoxHolders = (props) => {
  return (
    <div>
      <h4>Box Holders:</h4>
      {props.boxHolders.map((name, idx) => (
        <div key={idx}>
          <p>{name}</p>
          <button onClick={()=>props.removeBoxHolder(name)}>Remove</button>
        </div>
      ))}
    </div>
  )
}

export default BoxHolders