import CartItem from './CartItem'


const Cart = (props) => {

  const total = props.cart.reduce((sum, item) => {
    return item.quantity > 1 ? sum + (item.price * item.quantity) : sum + item.price
  }, 0)

  return (
    <div>
      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart} />
      ))}
      <p>Total: {total}</p>
    </div>
  )
}

export default Cart
