const DisplayProducts = (props) => {

  const selectedProducts = props.products.map((product, idx) => {
    if (product.category === props.productCategory) {
      return <p key={idx}>{product.name}</p>
    }
  })

  return (
    <div>
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
