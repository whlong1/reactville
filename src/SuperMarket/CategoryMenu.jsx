const CategoryMenu = (props) => {

  const getCategories = () => {
    return [...new Set(props.products.map((product) => product.category))]
  }

  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)} >
      {getCategories().map((category, idx) => (
        <option key={idx} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu
