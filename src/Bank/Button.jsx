import React, { useState } from "react"

const Button = (props) => {

  return (
    <button type="submit" onClick={(e) => {
      e.preventDefault()
      props.handleBalance(props.name, parseInt(props.amount))
      props.setAmount(0)
    }}>{props.name}</button>
  )
}

export default Button