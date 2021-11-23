import React from "react"
import { Link } from "react-router-dom"

const Boxes = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <div className="boxes">
      {boxList.map((boxNo)=>(
        <Link to={`/postoffice/${boxNo}`} key={boxNo}>PO BOX {boxNo}</Link>
      ))}
    </div>
  )
}

export default Boxes