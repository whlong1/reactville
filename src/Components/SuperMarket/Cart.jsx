import React, { useState } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
  const [message, setMessage] = useState('')

  const format = (num) => (Math.round(num * 100) / 100).toFixed(2)

  const total = format(props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0))

  const handleCheckout = () => {
    const checkoutStatus = props.handleExchange(total)
    checkoutStatus ? clearCart() : setMessage('Payment declined!')
  }

  const clearCart = () => {
    props.setCart([])
    setMessage('')
  }

  return (
    <div className="cart">
      <h3>Cart</h3>
      <p>{message}</p>

      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      ))}

      <div className="cart-total">
        <p>Total:</p>
        <p>${total}</p>
      </div>

      <button onClick={handleCheckout}>CHECKOUT</button>
      <button onClick={clearCart}>CLEAR CART</button>
    </div>
  )
}

export default Cart