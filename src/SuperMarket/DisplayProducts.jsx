import Product from './Product'


const DisplayProducts = (props) => {

  const selectedProducts = props.products.map((product, idx) => {
    return product.category === props.productCategory &&
      <Product
        key={idx}
        product={product}
        addItem={props.addItem}
        saleItem={props.saleItem}
      />
  })

  return (
    <div>
      {selectedProducts}
    </div>
  )
}

export default DisplayProducts
