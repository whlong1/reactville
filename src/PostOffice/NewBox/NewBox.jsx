import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"

const NewBox = (props) => {
  const navigate = useNavigate()
  const [holder, setHolder] = useState('')
  const [success, setSuccess] = useState(false)
  const [msg, setMsg] = useState('')
  const [boxHolders, setBoxHolders] = useState([])
  const cost = boxHolders.length * 10

  const handleSubmit = () => {
    if (props.createBox(boxHolders, cost)) {
      setSuccess(true)
      handleRedirect()
    } else {
      setMsg('Payment declined!')
    }
  }

  const handleRedirect = () => {
    setTimeout(() => {
      navigate('/postoffice', { replace: true })
    }, 2000)
  }

  const addBoxHolder = () => {
    setBoxHolders([...boxHolders, holder])
    setHolder('')
  }

  const removeBoxHolder = (name) => {
    setBoxHolders(boxHolders.filter((holder) => holder !== name))
  }

  if (success) { return <h3>Success!</h3> }

  return (
    <div>
      {msg}
      <h4>Cost: {cost} </h4>
      <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
      <input placeholder="Box holder name" type="text" name="holder" value={holder} onChange={(e) => setHolder(e.target.value)} />
      <button disabled={!holder.length} onClick={addBoxHolder}>Add Box Holder</button>
      <button disabled={!boxHolders.length} onClick={handleSubmit}>CREATE POBOX</button>
    </div>
  )
}

export default NewBox