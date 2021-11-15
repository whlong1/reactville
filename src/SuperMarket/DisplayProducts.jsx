import Product from './Product'


const DisplayProducts = (props) => {

  const selectedProducts = props.products.map((product, idx) => {
    return product.category === props.productCategory &&
      <Product
        key={idx}
        product={product}
        addToCart={props.addToCart}
      />
  })

  return (
    <div className="display-products-section">
      <h3>{props.productCategory}</h3>
      <div className="product-list">
        {selectedProducts}
      </div>
    </div>
  )
}

export default DisplayProducts
