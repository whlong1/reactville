import React from "react"
import { Link } from "react-router-dom"

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <section className="po-box-list">
      <div className="box-banner">
        <h1>Boxes</h1>
      </div>
      <div className="box-container">
        {boxList.map((boxNo) => (
          <Link className="po-box" to={`/postoffice/${boxNo}`} key={boxNo}>
            <div className="inner-po-box">
              BOX {boxNo}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default BoxList