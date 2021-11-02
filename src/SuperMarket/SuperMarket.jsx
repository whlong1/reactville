import Aisle from './Aisle'
import Shelf from './Shelf'
import CategoryMenu from './CategoryMenu'

import { useState } from 'react'

const products = [
  {
    name: 'Cheerios',
    price: 2.99,
    category: 'Cereal',
    image: 'GenericProduct.png'
  },
  {
    name: 'Cheese',
    price: 5.99,
    category: 'Dairy',
    image: 'GenericProduct.png'
  },
  {
    name: 'Milk',
    price: 5.99,
    category: 'Dairy',
    image: 'GenericProduct.png'
  },
]

const SuperMarket = () => {
  const [productCategory, setProductCategory] = useState('Cereal')

  const dayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const idx = new Date().getDay()
    return days[idx]
  }

  console.log(dayOfWeek())

  const detectSale = () => {
    switch (new Date().getDay()) {
      case 0:
        return 'Dairy'
      case 1:
        return ''
      case 2:
        return 'Cereal'
      case 3:
        return ''
      case 4:
        return ''
      case 5:
        return ''
      case 6:
        return ''
      case 7:
        return ''
    }
  }


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



  return (
    <div style={{ display: 'flex' }}>
      <p>Here: {productCategory}</p>

      <CategoryMenu products={products} setProductCategory={setProductCategory} />
      <Shelf products={groupBy()[productCategory]} />


    </div>
  )
}

export default SuperMarket
