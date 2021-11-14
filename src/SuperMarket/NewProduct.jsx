
const NewProduct = (props) => {




	return (
		<form onSubmit={props.handleSubmit}>
			<input name='name' placeholder='Name' type='text' />
			<input name='price' placeholder='Price' type='number' />
			<input name='image' placeholder='ImageUrl' type='text' />
			<select name='category'>
				{props.products.map((product, idx) => (
					<option key={idx} value={product.category}>{product.category}</option>
				))}
			</select>
			<button type='submit'>Submit</button>
		</form>
	)
}

export default NewProduct
