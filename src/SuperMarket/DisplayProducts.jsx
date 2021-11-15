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
    <div>
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
