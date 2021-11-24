import React, { useState } from "react"

const NewLetter= (props) => {
  const [letter, setLetter] = useState({
    boxNo: '',
    subject: '',
    content: '',
    read: false,
  })
  const [status, setStatus] = useState('typing');
  const isSending = status === 'sending'
  const isSent = status === 'sent'


  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('SENDING')
    await sendMessage(letter)
    setStatus('SENT')
  }

  const sendMessage = (letter) => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
      console.log('Function here')
    })
  }

  if (isSent) {
    return <h1>Your letter has been sent!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>New Letter</h1>
      {isSending && <p>Sending...</p>}
      <label>PO BOX
        <select disabled={isSending} name="boxNo" onChange={handleChange}>
          <option value={letter.boxNo}>1</option>
        </select>
      </label>
      <input
        required
        disabled={isSending}
        name="subject"
        placeholder="Subject"
        value={letter.subject}
        onChange={handleChange}
      />
      <textarea
        required
        disabled={isSending}
        name="content"
        placeholder="Content"
        value={letter.content}
        onChange={handleChange}
      />
      <button disabled={isSending} type="submit">Send</button>
    </form>
  )
}

export default NewLetter