import React, { useState } from "react"

import Form from './Form'
import SelectBox from './SelectBox'
import SelectRecipient from "./SelectRecipient"

import { initialState } from "./initialState"

const NewLetter = (props) => {
  const [boxNum, setBoxNum] = useState(0)
  const [letter, setLetter] = useState(initialState)
  const boxNumbers = Object.keys(props.boxes)
  const selectedBox = props.boxes[boxNum]

  const handleSubmit = async (e) => {
    e.preventDefault()
    props.sendLetter(boxNum, letter)
    setLetter(initialState)
  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Letter</h3>
      <SelectBox setBoxNum={setBoxNum} boxNumbers={boxNumbers} />
      <SelectRecipient selectedBox={selectedBox} handleChange={handleChange} />
      <Form letter={letter} handleChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  )
}

export default NewLetter