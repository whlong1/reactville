import React from "react"

const Boxes = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <div className="boxes">
      {boxList.map((boxNo)=>(
        <div key={boxNo}>PO BOX {boxNo}</div>
      ))}
    </div>
  )
}

export default Boxes