const CartItem = (props) => {


	return (
		<div>
			{props.item.name} {props.item.price}
			<p>Quantity: {props.item.quantity}</p>
		</div>
	)
}

export default CartItem
