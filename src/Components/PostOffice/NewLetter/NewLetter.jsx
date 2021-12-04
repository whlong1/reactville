import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

//Components & Data
import SelectBox from './SelectBox'
import SelectRecipient from "./SelectRecipient"
import { initialState } from "./initialState"

const NewLetter = (props) => {
  const navigate = useNavigate()
  const [boxNum, setBoxNum] = useState(null)
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
      <div className="status-msg">
        <h4>{status}</h4>
        <button onClick={() => setStatus('')}>New Letter</button>
        <button onClick={() => navigate('/postoffice')}>Return To Lobby</button>
      </div>
    )
  }

  return (
    <form className="post-office-form" onSubmit={handleSubmit}>
      <header>
        <h3>New Letter</h3>
        <SelectBox setBoxNum={setBoxNum} boxNumbers={boxNumbers} />
        <SelectRecipient selectedBox={selectedBox} handleChange={handleChange} />
      </header>
      <section>
        <h4>Sender</h4>
        <input
          required
          name="sender"
          placeholder="Sender"
          value={letter.sender}
          onChange={handleChange}
        />
        <h4>Enter Subject</h4>
        <input
          required
          name="subject"
          placeholder="Subject"
          value={letter.subject}
          onChange={handleChange}
        />
        <h4>Letter Content</h4>
        <textarea
          required
          name="content"
          placeholder="Content"
          value={letter.content}
          onChange={handleChange}
        />
        <button type="submit">SEND LETTER</button>
      </section>
    </form>
  )
}

export default NewLetter