import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'
import { salesGenerator } from './modules/salesGenerator'
import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [productCategory, setProductCategory] = useState('Cereal')
  const [sale, setSale] = useState(2)
  // const [cart, setCart] = useState([])

  // useEffect(() => {
  //   const newSale = salesGenerator(groupBy())
  //   console.log(newSale)
  //   setSale(newSale)
  // }, [])

  // console.log('Sale Item', products[sale])


  return (
    <div>
      {/* <p>Sale On {sale}</p>
      <Cart cart={cart} setCart={setCart} /> */}
      <h3>{productCategory}</h3>
      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <DisplayProducts products={products} productCategory={productCategory} />
    </div>
  )
}

export default SuperMarket


