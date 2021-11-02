

const Aisle = (props) => {

  console.log('Aisle', props.productList)

  return (
    <div>
      {props.productList.map((product, idx) => (
        <div key={idx}>
          <p>{product.name}</p>
        </div>
      ))}

    </div>
  )
}

export default Aisle
