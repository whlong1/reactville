const Shelf = (props) => {

  console.log('SHELF', props.products)

  return (
    <div>
      {props.products.map((product, idx)=>(
        <p key={idx}>{product.name}</p>
      ))}
    </div>
  )
}

export default Shelf
