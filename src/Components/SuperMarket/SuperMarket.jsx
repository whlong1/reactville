import { useState } from 'react'
import '../../styles/super-market.css'

// Components & Data
import Cart from './Cart'
import ProductList from './ProductList'
import CategoryMenu from './CategoryMenu'
import { products } from '../../data/market-data'

// Assets
import CartIcon from '../../assets/CartIcon.png'

const SuperMarket = (props) => {
  const [cart, setCart] = useState([])
  const [toggleCart, setToggleCart] = useState(true)
  const [productCategory, setProductCategory] = useState('Produce')

  const handleQuantity = (product, quantityChange) => {
    setCart(cart.map((p) =>
      p.id === product.id ? { ...p, quantity: p.quantity + quantityChange } : p
    ))
  }

  const addToCart = (product) => {
    if (cart.find(prod => prod.id === product.id)) {
      handleQuantity(product, 1)
    } else {
      setCart([{ ...product, quantity: 1 }, ...cart])
    }
  }

  const removeFromCart = (product) => {
    if (product.quantity > 1) {
      handleQuantity(product, -1)
    } else {
      setCart(cart.filter((prod) => prod.id !== product.id))
    }
  }

  return (
    <div className="super-market">
      <section>
        <nav>
          <h1>Super Market</h1>
          <CategoryMenu products={products} setProductCategory={setProductCategory} />
          <button id="cart-button" onClick={() => setToggleCart((prev) => !prev)}>
            <img src={CartIcon} alt="A shopping cart" />
          </button>
        </nav>
        <ProductList
          products={products}
          addToCart={addToCart}
          productCategory={productCategory}
        />
      </section>

      {toggleCart &&
        <Cart
          cart={cart}
          setCart={setCart}
          removeFromCart={removeFromCart}
          handleExchange={props.handleExchange}
        />
      }
    </div>
  )
}

export default SuperMarket