import './styles/style.css'

import { useState } from 'react'

// Components
import Cart from './Cart'
import NewProduct from './NewProduct'
import CategoryMenu from './CategoryMenu'
import DisplayProducts from './DisplayProducts'

// Data
import { productData } from './modules/data'


const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [toggleCart, setToggleCart] = useState(true)
  const [products, setProducts] = useState(productData)
  const [productCategory, setProductCategory] = useState('Cereal')

  const addToCart = (item) => {
    if (cart.find(prod => prod.id === item.id)) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod))
    } else {
      setCart([{ ...item, quantity: 1 }, ...cart])
    }
  }

  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      setCart(cart.map((prod) => prod.id === item.id ? { ...item, quantity: item.quantity - 1 } : prod))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }

  return (
    <div>
      <nav className="market-nav">
        <CategoryMenu products={products} setProductCategory={setProductCategory} />
        <button onClick={() => setToggleCart(!toggleCart)}>Cart</button>
      </nav>

      {toggleCart &&
        <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
      }

      <DisplayProducts
        products={products}
        addToCart={addToCart}
        productCategory={productCategory}
      />

      {/* <NewProduct products={products} /> */}
    </div>
  )
}

export default SuperMarket


