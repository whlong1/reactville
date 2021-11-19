import CartItem from './CartItem'

const Cart = (props) => {

  const total = props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0)

  return (
    <div className="cart">
      <h3>Cart</h3>
      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      ))}
      <div className="cart-total">
        <p>Total:</p>
        <p>${total.toFixed(2)}</p>
      </div>
      <button onClick={() => props.handlePurchase(total)}>CHECKOUT</button>
      <button onClick={() => props.setCart([])}>CLEAR CART</button>
    </div>
  )
}

export default Cart
