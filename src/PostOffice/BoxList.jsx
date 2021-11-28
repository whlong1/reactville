import React from "react"
import { Link } from "react-router-dom"
import poImg from './assets/post-img.png'

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <div className="lobby">
      {/* <section className="img-container"><img src={poImg} /></section> */}
      <section className="po-box-list">
        {boxList.map((boxNo) => (
          <Link className="po-box" to={`/postoffice/${boxNo}`} key={boxNo}>
            PO BOX {boxNo}
          </Link>
        ))}
      </section>
    </div>
  )
}

export default BoxList