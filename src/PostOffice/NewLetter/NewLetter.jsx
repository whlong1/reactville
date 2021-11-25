import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import SelectBox from './SelectBox'
import SelectRecipient from "./SelectRecipient"

import { initialState } from "./initialState"

const NewLetter = (props) => {
  const navigate = useNavigate()
  const [boxNum, setBoxNum] = useState(0)
  const [letter, setLetter] = useState(initialState)
  const [status, setStatus] = useState(false)
  const boxNumbers = Object.keys(props.boxes)
  const selectedBox = props.boxes[boxNum]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.sendLetter(boxNum, letter)) {
      setStatus('Your letter has been sent.')
      setLetter(initialState)
    } else {
      setStatus('Insufficient Funds.')
      setLetter(initialState)
    }
  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  if (status) {
    return (
      <div>
        <h4>{status}</h4>
        <button onClick={() => setStatus('')}>New Letter</button>
        <button onClick={() => navigate('/postoffice')}>Return To Lobby</button>
      </div>
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