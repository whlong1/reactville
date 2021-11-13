const Shelf = (props) => {

  console.log('SHELF', props.products)

  return (
    <div>
      {/* {props.products[0].category === props.sale ? <h1>SALE</h1> : null} */}

      {/* {props.products.map((product, idx) => (
        <p key={idx}>{product.name}</p>
      ))} */}
    </div>
  )
}

export default Shelf
