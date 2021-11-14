import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import NewProduct from './NewProduct'
import Cart from './Cart'

import { productData } from './modules/data'
import { salesGenerator } from './modules/functions'
import { useState } from 'react'



const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productData)
  const [saleItem, setSaleItem] = useState(() => salesGenerator(products))
  const [productCategory, setProductCategory] = useState('Cereal')



  const addToCart = ({ ...item }) => {
    // item.price = item.id === saleItem.id ? (item.price / 2).toFixed(2) : item.price
    const existing = [...cart].find(product => product.id === item.id)
    if (existing) {
      existing.quantity++
      const newArr = cart.map((prod) => prod.id === item.id ? existing : prod)
      setCart(newArr)
    } else {
      item.quantity = 1
      setCart([item, ...cart])
    }
  }


  const removeFromCart = ({ ...item }) => {
    if (item.quantity > 1) {
      item.quantity--
      const newArr = cart.map((prod) => prod.id === item.id ? item : prod)
      setCart(newArr)
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }


  return (
    <div>
      <p>Sale On {saleItem?.name}</p>
      <h3>{productCategory}</h3>

      <Cart cart={cart} removeFromCart={removeFromCart} />

      <CategoryMenu
        products={products}
        setProductCategory={setProductCategory}
      />

      <DisplayProducts
        addToCart={addToCart}
        saleItem={saleItem}
        products={products}
        productCategory={productCategory}
      />

      <NewProduct products={products} />
    </div>
  )
}

export default SuperMarket


