import React, { useState } from "react"

const NewLetter = (props) => {
  const nextLetterId = Object.keys(props.letters).length
  const [letter, setLetter] = useState({
    subject: '',
    content: '',
    read: false,
  })

  // 0: {
  //   date: '1/4/2021',
  //   recipient: 'Dan Abramov',
  //   subject: 'Losing Patience',
  //   content: 'I'm not going to be ignored, Dan.',
  //   read: false
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // setStatus('SENDING')
    // await sendMessage(letter)
    // setStatus('SENT')
  }

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  //how does a user select po box?


  return (
    <form onSubmit={handleSubmit}>
      <h1>New Letter</h1>
      <label>PO BOX
        <select name="boxNo" onChange={handleChange}>
          <option value={letter.boxNo}>1</option>
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