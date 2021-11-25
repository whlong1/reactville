import React from "react"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]
  const buttonText = thisLetter.read ? 'Mark As Unread' : 'Mark As Read'

  return (
    <div>
      <p>To {thisLetter.recipient}</p>
      <p>Subject: {thisLetter.subject}</p>
      <p>{thisLetter.date}</p>
      <p>{thisLetter.read ? 'Read' : 'Not Read'}</p>
      <p>{thisLetter.content}</p>
      <button onClick={() => props.markAsRead(props.id, !thisLetter.read)}>{buttonText}</button>
    </div>
  )
}

export default Letter