import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import NewProduct from './NewProduct'
import Cart from './Cart'

import { productData } from './modules/data'
import { useState } from 'react'



const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productData)
  const [productCategory, setProductCategory] = useState('Cereal')



  const addToCart = ({ ...item }) => {
    const existingItem = cart.find(product => product.id === item.id)
    if (existingItem) {
      existingItem.quantity++
      setCart(cart.map((prod) => prod.id === item.id ? existingItem : prod))
    } else {
      item.quantity = 1
      setCart([item, ...cart])
    }
  }


  const removeFromCart = ({ ...item }) => {
    if (item.quantity > 1) {
      item.quantity--
      setCart(cart.map((prod) => prod.id === item.id ? item : prod))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }


  return (
    <div>
      <h3>{productCategory}</h3>

      <Cart cart={cart} removeFromCart={removeFromCart} />

      <CategoryMenu
        products={products}
        setProductCategory={setProductCategory}
      />

      <DisplayProducts
        products={products}
        addToCart={addToCart}
        productCategory={productCategory}
      />

      <NewProduct products={products} />
    </div>
  )
}

export default SuperMarket


