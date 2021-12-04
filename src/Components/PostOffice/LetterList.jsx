import React from "react"
import Letter from './Letter'

const LetterList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th width="8%">Date</th>
          <th>Sender</th>
          <th>Recipient</th>
          <th>Subject</th>
          <th width="2%">Read</th>
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