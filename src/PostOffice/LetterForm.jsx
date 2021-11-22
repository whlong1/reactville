import React, { useState } from "react"

const LetterForm = (props) => {
  const [letter, setLetter] = useState({
    boxNo: '',
    subject: '',
    content: '',
    read: false,
  })

  const handleChange = (e) => {
    setLetter({ ...letter, [e.target.name]: e.target.value })
  }

  const [status, setStatus] = useState('typing');
  const [text, setText] = useState('')

  const isSending = status === 'sending'
  const isSent = status === 'sent'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    await sendMessage(text)
    setStatus('sent')
  }

  const sendMessage = (text) => {
    return new Promise(resolve => {
      setTimeout(resolve, 2000)
      console.log('Working')
    })
  }

  if (isSent) {
    return <h1>Thanks for feedback!</h1>
  }

  return (
    <form onSubmit={handleSubmit}>
      {isSending && <p>Sending...</p>}
      <label>PO BOX
        <select required disabled={isSending} name="boxNo" onChange={handleChange}>
          <option value={letter.boxNo}></option>
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

export default LetterForm