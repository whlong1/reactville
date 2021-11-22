import React, { useState } from "react"

const Button = (props) => {

  return (
    <button type="submit" onClick={(e) => {
      e.preventDefault()
      if (props.amount) props.handleBalance(props.name, parseInt(props.amount))
      props.setAmount('')
    }}>{props.name}</button>
  )
}

export default Button