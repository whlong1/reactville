import React from "react"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]
  const buttonText = thisLetter.read ? 'Mark As Unread' : 'Mark As Read'

  return (
    <div className="letter">

      <header>
        <p>{thisLetter.date}</p>
        <p>{thisLetter.recipient}</p>
        <p>Subject: {thisLetter.subject}</p>
        <button onClick={() => props.markAsRead(props.id, !thisLetter.read)}>{buttonText}</button>
      </header>
      
      <p>{thisLetter.content}</p>

    </div>
  )
}

export default Letter
