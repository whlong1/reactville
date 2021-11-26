import React from "react"
import Letter from './Letter'

const LetterList = (props) => {
  return (
    <table className="letter">
      <thead>
        <tr>
          <th>Date</th>
          <th>Recipient</th>
          <th>Subject</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {props.letterIds.map((id) => (
          <Letter key={id} id={id} letters={props.letters} markAsRead={props.markAsRead} />
        ))}
      </tbody>
    </table>
  )
}

export default LetterList
