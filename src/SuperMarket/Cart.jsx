const Cart = (props) => {



  return (
    <ul>
      {props.cart?.map((item) => (
        <li key={item.id}>{item.name} {item.price}</li>
      ))}
    </ul>
  )
}

export default Cart
