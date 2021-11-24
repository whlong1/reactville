import React, { useState } from "react"

const NewLetter = (props) => {
  const initialState = {
    date: new Date().toLocaleDateString(),
    subject: '',
    recipient: '',
    content: '',
    read: false,
  }

  const boxNumbers = Object.keys(props.boxes)

  const [boxNum, setBoxNum] = useState(0)
  const [letter, setLetter] = useState(initialState)


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

      <label>Select a PO BOX
        <select required name="boxNo" onChange={(e) => setBoxNum(e.target.value)}>
          {boxNumbers.map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>

      <label>Select A Recipient
        <select required name="boxNo" onChange={handleChange}>
          {props.boxes[boxNum]?.boxHolders.map((name, idx) => (
            <option key={idx} value={name}>{name}</option>
          ))}
        </select>
      </label>


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