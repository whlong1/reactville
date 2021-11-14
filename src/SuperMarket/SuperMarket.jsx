import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'

import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [saleItem, setSaleItem] = useState()
  const [cart, setCart] = useState([])
  const [productCategory, setProductCategory] = useState('Cereal')

  const salesGenerator = (products) => {
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
  }

  const addItem = (item) => {
    console.log(item)
    // item.price = item.id === saleItem.id && 2
    setCart([item, ...cart])
  }

  useEffect(() => {
    const newSale = salesGenerator(products)
    setSaleItem(newSale)
  }, [])

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


