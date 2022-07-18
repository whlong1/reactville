const CartItem = (props) => {
	return (
		<div className="cart-card">
			<img src={props.item.image} alt="product icon" />
			<span>
				<p id="product-name">{props.item.name}</p>
				<p id="product-price">${props.item.price}</p>
				<p id="product-quantity">Quantity: {props.item.quantity}</p>
			</span>
			<button onClick={() => props.removeFromCart(props.item)}>X</button>
		</div>
	)
}

export default CartItem