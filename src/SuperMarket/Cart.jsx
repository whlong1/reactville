import CartItem from './CartItem'


const Cart = (props) => {
  // Warning: Encountered two children with the same key, `3`. 
  // Keys should be unique so that components maintain their 
  // identity across updates. Non-unique keys may cause children 
  // to be duplicated and/or omitted — the behavior is unsupported 
  // and could change in a future version.

  //In this case, idx should be used to prevent duplicates

  //If two or more items with the same id are added to the cart, display 1 with quantity next to it


  const cartItems = [...new Set(props.cart.map((product) => product))]

  console.log(cartItems)

  return (
    <div>
      {props.cart?.map((item, idx) => (
        <CartItem key={idx} item={item} removeFromCart={props.removeFromCart}/>
      ))}
    </div>
  )
}

export default Cart
