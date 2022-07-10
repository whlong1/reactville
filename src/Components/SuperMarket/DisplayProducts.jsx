import React from 'react'
import Product from './Product'

const DisplayProducts = (props) => {
  return (
    <div className="product-list">
      {props.products.map((product, idx) => (
        product.category === props.productCategory &&
        <Product
          key={idx}
          product={product}
          addToCart={props.addToCart}
        />
      ))}
    </div>
  )
}

export default DisplayProducts