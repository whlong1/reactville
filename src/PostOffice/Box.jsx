import React from "react"
import { useParams, useNavigate } from "react-router"
import Letters from "./Letters"

const Box = (props) => {
  const { boxNo } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h3>PO Box {boxNo}</h3>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}

export default Box