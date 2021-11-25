import React from "react"
import { useParams, useNavigate } from "react-router"
import LetterList from "./LetterList"

const Box = (props) => {
  const navigate = useNavigate()
  const { boxNo } = useParams()
  const poBox = props.boxes[boxNo]
  console.log('This boxes letters', poBox.letters)

  return (
    <div>
      <h3>PO Box {boxNo}</h3>
      <button onClick={() => navigate(-1)}>Back</button>
      <section>
        {poBox.boxHolders.map((holder, idx) => (
          <p key={idx}>{holder}</p>
        ))}
      </section>

      <LetterList letterIds={poBox.letters} letters={props.letters} markAsRead={props.markAsRead} />

    </div>
  )
}

export default Box