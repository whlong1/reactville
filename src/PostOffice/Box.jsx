import React from "react"
import { useParams, useNavigate } from "react-router"
import Letters from "./Letters"

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

      <Letters letterIds={poBox.letters} letters={props.letters} />

    </div>
  )
}

export default Box