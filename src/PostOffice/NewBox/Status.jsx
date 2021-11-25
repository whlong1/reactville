import React from "react"

const Status = (props) => {

  if (props.status === 'Success') { return <h3>Success Message here</h3> }

  return (
    <div>
      <h3>{props.status}</h3>
      <button onClick={() => props.setStatus(0)}>Return</button>
    </div>
  )
}

export default Status