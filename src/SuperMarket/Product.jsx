

const Product = (props) => {


  return (
    <div onClick={() => props.addToCart(props.product)}>
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
    </div>
  )
}

export default Product
