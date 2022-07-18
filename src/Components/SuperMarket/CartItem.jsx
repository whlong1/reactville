const CartItem = (props) => {
	return (
		<div className="cart-card">
			<img src={props.product.image} alt="product icon" />
			<span>
				<p id="product-name">{props.product.name}</p>
				<p id="product-price">${props.product.price}</p>
				<p id="product-quantity">Quantity: {props.product.quantity}</p>
			</span>
			<button onClick={() => props.removeFromCart(props.product)}>X</button>
		</div>
	)
}

export default CartItem