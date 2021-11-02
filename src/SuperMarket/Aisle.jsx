import Product from './Product'

const Aisle = (props) => {



  return (
    props.productList.map((product, idx) => (
      <Product key={idx} product={product} detectSale={props.detectSale} />
    ))
  )
}

export default Aisle
