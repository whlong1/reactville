import Shelf from './Shelf'
import CategoryMenu from './CategoryMenu'
import Cart from './Cart'
import { salesGenerator } from './modules/salesGenerator'
import { products } from './modules/data'
import { useState, useEffect } from 'react'

const SuperMarket = () => {
  const [productCategory, setProductCategory] = useState('Cereal')
  const [sale, setSale] = useState('Dairy')

  const groupBy = () => {
    const sorted = products.reduce(function (aisle, product) {
      if (!aisle[product['category']]) {
        aisle[product['category']] = []
      }
      if(sale === product.category){
        product.price = 2
        aisle[product['category']].push(product)
      } else {
        aisle[product['category']].push(product)
      }
      return aisle
    }, {})
    return sorted
  }


  // useEffect(() => {
  //   const newSale = salesGenerator()
  //   setSale(newSale)
  // }, [])


  return (
    <div>
      <p>Sale On {sale}</p>
      <p>Viewing: {productCategory}</p>
      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <Shelf products={groupBy()[productCategory]} sale={sale} />
    </div>
  )
}

export default SuperMarket
