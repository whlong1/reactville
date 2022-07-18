import { Link } from "react-router-dom"

const BoxList = (props) => {
  const boxList = Object.keys(props.boxes)

  return (
    <section className="po-box-list">
      {boxList.map((boxNo) => (
        <Link 
          className="po-box masked-corners" 
          to={`/postoffice/${boxNo}`} 
          key={boxNo}
        >
          <div className="inner-po-box masked-corners">
            BOX {boxNo}
          </div>
        </Link>
      ))}
    </section>
  )
}

export default BoxList