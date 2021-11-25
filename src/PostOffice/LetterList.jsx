import React from "react"

import Letter from './Letter'

const LetterList = (props) => {
  return (
    <div>
      {props.letterIds.map((id) => (
        <Letter key={id} id={id} letters={props.letters} markAsRead={props.markAsRead} />
      ))}
    </div>
  )
}

export default LetterList