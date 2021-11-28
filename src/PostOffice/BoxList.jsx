import React from "react"
import { Link } from "react-router-dom"

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <section className="po-box-list">
      {boxList.map((boxNo) => (
        <Link className="po-box" to={`/postoffice/${boxNo}`} key={boxNo}>
          PO BOX {boxNo}
        </Link>
      ))}
    </section>
  )
}

export default BoxList