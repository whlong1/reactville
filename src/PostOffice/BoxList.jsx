import React from "react"
import { Link } from "react-router-dom"

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <div className="boxes">
      <h4>PO Boxes</h4>
      {boxList.map((boxNo)=>(
        <Link to={`/postoffice/${boxNo}`} key={boxNo}>PO BOX {boxNo}</Link>
      ))}
    </div>
  )
}

export default BoxList