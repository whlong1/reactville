

const Product = (props) => {


  return (
    <div className="product-card">
      <img src={props.product.image} />
      <section>
        <p>{props.product.name}</p>
        <p>{props.product.price}</p>
        <button onClick={() => props.addToCart(props.product)}>Add To Cart</button>
      </section>
    </div>
  )
}

export default Product
