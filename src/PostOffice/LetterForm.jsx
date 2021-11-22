import React, { useState } from "react"

const LetterForm = (props) => {
  const [letter, setLetter] = useState({
    boxNo: '',
    subject: '',
    content: '',
  })

  const handleChange = (e) => {
    setLetter({
      ...letter,
      [e.target.name]: e.target.value
    })
  }


  return (
    <form>
      <select name="boxNo" onChange={handleChange} required>
        <option value={letter.boxNo}></option>
      </select>
      <input
        required
        name="subject"
        value={letter.subject}
        onChange={handleChange}
      />
      <input
        required
        name="subject"
        value={letter.subject}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  )
}

export default LetterForm