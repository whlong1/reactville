import React from "react"
import { useParams, useNavigate } from "react-router"
import LetterList from "./LetterList"

const BoxDetails = (props) => {
  const navigate = useNavigate()
  const { boxNo } = useParams()
  const poBox = props.boxes[boxNo]

  if (!poBox) return (
    <div>
      <h4>Hmm, this box doesn't seem to exist.</h4>
      <button onClick={() => navigate('/postoffice')}>Return To Lobby</button>
    </div>
  )

  return (
    <section className="box-details">
      <header>
        <h3>PO Box {boxNo}</h3>
        <select>
          {poBox.boxHolders.map((name, idx) => (<option key={idx}>{name}</option>))}
        </select>
      </header>

      <LetterList letterIds={poBox.letters} letters={props.letters} markAsRead={props.markAsRead} />

    </section>
  )
}

export default BoxDetails