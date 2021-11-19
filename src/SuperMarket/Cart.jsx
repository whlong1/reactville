import CartItem from './CartItem'

const Cart = (props) => {

  const total = props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0)

  const formattedTotal = (Math.round(total * 100) / 100).toFixed(2)

  return (
    <div className="cart">
      <h3>Cart</h3>
      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      ))}
      <div className="cart-total">
        <p>Total:</p>
        <p>${formattedTotal}</p>
      </div>
      <button onClick={() => props.handlePurchase(formattedTotal)}>CHECKOUT</button>
      <button onClick={() => props.setCart([])}>CLEAR CART</button>
    </div>
  )
}

export default Cart
