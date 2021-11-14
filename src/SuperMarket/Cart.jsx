const Cart = (props) => {
  // Warning: Encountered two children with the same key, `3`. 
  // Keys should be unique so that components maintain their 
  // identity across updates. Non-unique keys may cause children 
  // to be duplicated and/or omitted — the behavior is unsupported 
  // and could change in a future version.

  //In this case, idx should be used to prevent duplicates

  return (
    <ul>
      {props.cart?.map((item, idx) => (
        <li key={idx}>{item.name} {item.price}</li>
      ))}
    </ul>
  )
}

export default Cart
