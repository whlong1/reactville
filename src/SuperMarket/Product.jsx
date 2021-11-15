

const Product = (props) => {


  return (
    <div className="product-card">
      <p>{props.product.name}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.addToCart(props.product)}>Add To Cart</button>
    </div>
  )
}

export default Product
