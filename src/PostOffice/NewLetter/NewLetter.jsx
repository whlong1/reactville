import React, { useState } from "react"

import SelectBox from './SelectBox'
import SelectRecipient from "./SelectRecipient"

import { initialState } from "./initialState"

const NewLetter = (props) => {
  const [boxNum, setBoxNum] = useState(0)
  const [letter, setLetter] = useState(initialState)
  const [isSent, setIsSent] = useState(false)
  const boxNumbers = Object.keys(props.boxes)
  const selectedBox = props.boxes[boxNum]

  const handleSubmit = (e) => {
    e.preventDefault()
    props.sendLetter(boxNum, letter)
    setIsSent(true)
    setLetter(initialState)
  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  if (isSent) {
    return (
      <label>Your letter has been sent.
        <button onClick={() => setIsSent(false)}>New Letter</button>
      </label>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>New Letter</h3>
      <SelectBox setBoxNum={setBoxNum} boxNumbers={boxNumbers} />
      <SelectRecipient selectedBox={selectedBox} handleChange={handleChange} />
      <input
        required
        name="subject"
        placeholder="Subject"
        value={letter.subject}
        onChange={handleChange}
      />
      <textarea
        required
        name="content"
        placeholder="Content"
        value={letter.content}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default NewLetter