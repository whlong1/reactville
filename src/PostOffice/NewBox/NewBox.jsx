import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import BoxHolders from "./BoxHolders"

const NewBox = (props) => {
  const navigate = useNavigate()
  const [holder, setHolder] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false)
  const [boxHolders, setBoxHolders] = useState([])

  const handleSubmit = () => {
    props.createBox(boxHolders)
    setSuccess(true)
    handleRedirect()
  }

  const handleRedirect = () => {
    setTimeout(() => {
      navigate('/postoffice', { replace: true })
    }, 2000)
  }

  const addBoxHolder = () => {
    if (holder.length) {
      setBoxHolders([...boxHolders, holder])
      setHolder('')
    } else {
      setErrMsg('Please enter a valid name.')
    }
  }

  //for every box holder, charge a user more
  //display box holders
  //add/remove box holders

  console.log(holder)
  console.log('Box Holders', boxHolders)

  if (errMsg) {
    return (
      <label>{errMsg}
        <button onClick={() => setErrMsg('')}>Return</button>
      </label>
    )
  }

  if (success) { return <h3>Success!</h3> }

  return (
    <div>
      <BoxHolders boxHolders={boxHolders} />
      <input placeholder="Box holder name" type="text" name="holder" value={holder} onChange={(e) => setHolder(e.target.value)} />
      <button onClick={addBoxHolder}>Add Box Holder</button>
      <button disabled={!boxHolders.length} onClick={handleSubmit}>CREATE POBOX</button>
    </div>
  )
}

export default NewBox