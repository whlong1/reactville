const DisplayProducts = (props) => {
  
  const selectedProducts = props.products.map((product, idx) => {
    if (product.category === props.productCategory) {
      return <p key={idx}>{product.name}</p>
    }
  })

  return (
    <div>
      {/* {props.products[0].category === props.sale ? <h1>SALE</h1> : null} */}
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
