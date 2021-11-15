import './styles/style.css'
import { useState } from 'react'

// Components
import Cart from './Cart'
import MarketNav from './MarketNav'
import DisplayProducts from './DisplayProducts'

// Data
import { products } from './modules/data'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [toggleCart, setToggleCart] = useState(true)
  const [productCategory, setProductCategory] = useState('Produce')

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
    <div className="super-market">

      <section>
        <MarketNav
          products={products}
          toggleCart={toggleCart}
          setToggleCart={setToggleCart}
          setProductCategory={setProductCategory}
        />
        <DisplayProducts
          products={products}
          addToCart={addToCart}
          productCategory={productCategory}
        />
      </section>

      {toggleCart &&
        <Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart} />
      }

    </div>
  )
}

export default SuperMarket


