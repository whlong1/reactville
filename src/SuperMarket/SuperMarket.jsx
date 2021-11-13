import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'
import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [productCategory, setProductCategory] = useState('Cereal')
  const [saleItem, setSaleItem] = useState()

  const salesGenerator = (products) => {
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
  }

  useEffect(() => {
    const newSale = salesGenerator(products)
    setSaleItem(newSale)
  }, [])

  return (
    <div>
      <p>Sale On {saleItem?.name}</p>
      <h3>{productCategory}</h3>
      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <DisplayProducts products={products} productCategory={productCategory} saleItem={saleItem} />
    </div>
  )
}

export default SuperMarket


