import CartItem from './CartItem'

const Cart = (props) => {

  const total = props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0)

  return (
    <div className="cart-container">

      <section className="cart-content">
        {props.cart?.map((item, idx) => (
          <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
        ))}
      </section>

      <section className="cart-ui">
        <p>Total: $ {total.toFixed(2)}</p>
        <button onClick={() => props.setCart([])}>Clear Cart</button>
      </section>

    </div>
  )
}

export default Cart
