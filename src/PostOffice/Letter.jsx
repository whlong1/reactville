import React from "react"

const Letter = (props) => {
  const thisLetter = props.letters[props.id]
  const buttonText = thisLetter.read ? 'Mark As Unread' : 'Mark As Read'

  return (
    <div className="letter">

      <header>
        <p>From</p>
        <p>{thisLetter.recipient}</p>
        <p>{thisLetter.date}</p>
      </header>

      <section>
        <p>Subject: {thisLetter.subject}</p>
        <p>{thisLetter.read ? 'Read' : 'Not Read'}</p>
        <button onClick={() => props.markAsRead(props.id, !thisLetter.read)}>{buttonText}</button>
      </section>
      
      <p>{thisLetter.content}</p>

    </div>
  )
}

export default Letter
