import ProductCard from './ProductCard'

const ProductList = (props) => {
  return (
    <div className="product-list">
      {props.products.map((product, idx) => (
        product.category === props.productCategory &&
        <ProductCard
          key={idx}
          product={product}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  )
}

export default ProductList