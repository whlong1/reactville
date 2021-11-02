import Shelf from './Shelf'
import CategoryMenu from './CategoryMenu'
import { salesGenerator } from './modules/salesGenerator'
import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [productCategory, setProductCategory] = useState('Cereal')
  const [sale, setSale] = useState()

  const groupBy = () => {
    const sorted = products.reduce(function (aisle, product) {
      if (!aisle[product['category']]) {
        aisle[product['category']] = []
      }
      aisle[product['category']].push(product)
      return aisle
    }, {})
    return sorted
  }


  useEffect(() => {
    const newSale = salesGenerator()
    setSale(newSale)
  }, [])


  return (
    <div>
      <p>Sale On {sale}</p>
      <p>Viewing: {productCategory}</p>
      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <Shelf products={groupBy()[productCategory]} />
    </div>
  )
}

export default SuperMarket
