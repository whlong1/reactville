

const Product = (props) => {


  return (
    <div className="product-card">
      <img src={props.product.image} />
      <section>
        <span>
          <p>{props.product.name}</p>
          <p>{props.product.price}</p>
        </span>
        <button onClick={() => props.addToCart(props.product)}>ADD TO CART</button>
      </section>
    </div>
  )
}

export default Product
