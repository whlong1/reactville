import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"

const NewBox = (props) => {
  const navigate = useNavigate()
  const [holder, setHolder] = useState('')
  const [success, setSuccess] = useState(false)
  const [boxHolders, setBoxHolders] = useState([])
  const cost = boxHolders.length * 10

  const handleSubmit = () => {
    props.createBox(boxHolders, cost)
    setSuccess(true)
    handleRedirect()
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

  //for every box holder, charge a user more
  if (success) { return <h3>Success!</h3> }

  return (
    <div>
      <h4>Cost: {cost} </h4>
      <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
      <input placeholder="Box holder name" type="text" name="holder" value={holder} onChange={(e) => setHolder(e.target.value)} />
      <button disabled={!holder.length} onClick={addBoxHolder}>Add Box Holder</button>
      <button disabled={!boxHolders.length} onClick={handleSubmit}>CREATE POBOX</button>
    </div>
  )
}

export default NewBox