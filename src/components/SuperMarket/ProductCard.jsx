const ProductCard = (props) => {
  return (
    <div className="product-card">
      <img src={props.product.image} alt="product icon" />
      <section>
        <span>
          <p id="product-name">{props.product.name}</p>
          <p id="product-price">${props.product.price}</p>
        </span>
        <button className="green-btn" onClick={() => props.addToCart(props.product)}>
          ADD TO CART
        </button>
      </section>
    </div>
  )
}

export default ProductCard