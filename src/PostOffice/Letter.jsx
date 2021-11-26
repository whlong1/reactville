import React from "react"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]
  const buttonText = thisLetter.read ? 'Mark As Unread' : 'Mark As Read'

  return (
    <>
      <tr>
        <td id="letter-date">{thisLetter.date}</td>
        <td>{thisLetter.recipient}</td>
        <td>{thisLetter.subject}</td>
        <td>
          <input
            name="isRead"
            type="checkbox"
            checked={thisLetter.read}
            onChange={() => props.markAsRead(props.id, !thisLetter.read)}
          />
        </td>
      </tr>
      <td colSpan="4">
        {thisLetter.content}
      </td>
    </>
  )
}

export default Letter



