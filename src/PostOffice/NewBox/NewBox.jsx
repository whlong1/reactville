import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"
import Status from './Status'

const NewBox = (props) => {
  const navigate = useNavigate()
  const [holder, setHolder] = useState('')
  const [status, setStatus] = useState('')
  const [boxHolders, setBoxHolders] = useState([])
  const costOfBox = boxHolders.length * 30

  const handleSubmit = () => {
    if (props.createBox(boxHolders, costOfBox)) {
      setStatus('Success')
      handleRedirect()
    } else {
      setStatus('Payment Failed')
    }
  }

  const handleRedirect = () => {
    setTimeout(() => {
      navigate('/postoffice', { replace: true })
    }, 2000)
  }

  const addBoxHolder = () => {
    if (!boxHolders.includes(holder)) {
      setBoxHolders([...boxHolders, holder])
      setHolder('')
    } else {
      setStatus('Duplicate Name')
      setHolder('')
    }
  }

  const removeBoxHolder = (name) => {
    setBoxHolders(boxHolders.filter((holder) => holder !== name))
  }

  if (status) { return <Status status={status} setStatus={setStatus} /> }

  return (
    <div>
      {costOfBox ? <h4>Cost: ${costOfBox} </h4> : <h4>Please Add Box Holders</h4>}
      <BoxHolders boxHolders={boxHolders} removeBoxHolder={removeBoxHolder} />
      <input placeholder="Box holder name" type="text" name="holder" value={holder} onChange={(e) => setHolder(e.target.value)} />
      <button disabled={!holder.length} onClick={addBoxHolder}>Add Box Holder</button>
      <button disabled={!boxHolders.length} onClick={handleSubmit}>CREATE POBOX</button>
    </div>
  )
}

export default NewBox