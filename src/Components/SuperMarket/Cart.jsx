import { useState } from 'react'
import CartCard from './CartCard'

const Cart = (props) => {
  const [message, setMessage] = useState('')
  const format = (num) => (Math.round(num * 100) / 100).toFixed(2)
  const total = format(props.cart.reduce((sum, product) => {
    return product.quantity > 1 ? sum + (product.price * product.quantity) : sum + product.price
  }, 0))

  const handleCheckout = () => {
    const checkoutStatus = props.handleExchange(total)
    checkoutStatus ? clearCart() : setMessage('Payment declined!')
  }

  const clearCart = () => {
    props.setCart([])
    setMessage('')
  }

  const cartTotal = (
    <div className="cart-total">
      <p>Sub-Total:</p>
      <p>2 Items</p>
      <p>${total}</p>
    </div>
  )

  return (
    <section className={`cart-section ${props.isCartOpen ? 'open' : ''}`}>
      <h3>Cart</h3>
      <p>{message}</p>

      {props.cart.map((product, idx) => (
        <CartCard key={idx} product={product} removeFromCart={props.removeFromCart} />
      ))}


      <button onClick={handleCheckout}>CHECKOUT</button>
      <button onClick={clearCart}>CLEAR CART</button>
    </section>
  )
}

export default Cart