

const Product = (props) => {
  //if product === saleItem, set updated value, build on click

  const adjustedPrice = () => {
    if (props.saleItem?.id === props.product.id) {
      return <p>Adjusted: 2 </p>
    }
  }

  return (
    <>
      {props.product.name}
      {props.product.price}
      {adjustedPrice()}
    </>
  )
}

export default Product
