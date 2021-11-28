import React from "react"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]

  return (
    <>
      <tr>
        <td id="letter-date">{thisLetter.date}</td>
        <td id="letter-sender">{thisLetter.sender}</td>
        <td id="letter-recipient">{thisLetter.recipient}</td>
        <td id="letter-subject">{thisLetter.subject}</td>
        <td id="letter-checkbox">
          <input
            name="isRead"
            type="checkbox"
            checked={thisLetter.read}
            onChange={() => props.markAsRead(props.id, !thisLetter.read)}
          />
        </td>
      </tr>
      <td id="letter-content" colSpan="4">
        {thisLetter.content}
      </td>
    </>
  )
}

export default Letter



