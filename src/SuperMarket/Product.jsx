

const Product = (props) => {

  const adjustedPrice = () => {
    if (props.saleItem?.id === props.product.id) {
      return <p>Adjusted: 2 </p>
    }
  }

  return (
    <div onClick={() => props.addToCart(props.product)}>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
    </div>
  )
}

export default Product
