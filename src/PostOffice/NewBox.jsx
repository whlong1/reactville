import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const NewBox = (props) => {
  const [holder, setHolder] = useState('')
  const [boxHolders, setBoxHolders] = useState([])


  const handleSubmit = () => {
    //if holder.length
    // e.preventDefault()
    // props.sendLetter(boxNum, letter)
    console.log('works')
    // props.createBox()
  }

  const addBoxHolder = () => {
    console.log('hello')
    setBoxHolders([...boxHolders, holder])
    setHolder('')
  }

  console.log(holder)
  console.log('Box Holders', boxHolders)

  return (
    <div>
      <input type="text" name="holder" value={holder} onChange={(e)=>setHolder(e.target.value)} />
      <button onClick={addBoxHolder}>Add Box Holder</button>
      <button onClick={handleSubmit}>CREATE POBOX</button>
    </div>
  )
}

export default NewBox