import React from 'react'

const CategoryMenu = (props) => {
  const categories = [...new Set(props.products.map((product) => product.category))]

  return (
    <select onChange={(e) => props.setProductCategory(e.target.value)} >
      {categories.map((category, idx) => (
        <option key={idx} value={category}>
          {category}
        </option>
      ))}
    </select>
  )
}

export default CategoryMenu