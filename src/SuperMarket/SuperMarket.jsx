import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'

import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Cereal')
  
  const salesGenerator = (products) => {
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
  }

  // Lazy initial state
  const [saleItem, setSaleItem] = useState(salesGenerator(products))

  const addItem = (item) => {
    item.price = item.id === saleItem.id && 2
    setCart([item, ...cart])
  }



  return (
    <div>
      <p>Sale On {saleItem?.name}</p>
      <h3>{productCategory}</h3>

      <Cart cart={cart} />

      <CategoryMenu
        products={products}
        setProductCategory={setProductCategory}
      />

      <DisplayProducts
        addItem={addItem}
        saleItem={saleItem}
        products={products}
        productCategory={productCategory}
      />
    </div>
  )
}

export default SuperMarket


