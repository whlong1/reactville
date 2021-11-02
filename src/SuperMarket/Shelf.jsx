const Shelf = (props) => {

  console.log('SHELF', props.products)

  return (
    <div>
      {props.products.map((product)=>(
        <p>{product.name}</p>
      ))}
    </div>
  )
}

export default Shelf
