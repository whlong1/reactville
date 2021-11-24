import React from "react"


const Form = ({ letter, handleChange }) => {

  return (
    <>
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
    </>
  )
}

export default Form