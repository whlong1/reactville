import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import NewProduct from './NewProduct'
import Cart from './Cart'

import { productData } from './modules/data'
import { salesGenerator } from './modules/functions'
import { useState } from 'react'

const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productData)
  const [saleItem, setSaleItem] = useState(salesGenerator(products))
  const [productCategory, setProductCategory] = useState('Cereal')


  console.log(products)

  // Lazy initial state
  //https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates

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

      <NewProduct products={products} />
    </div>
  )
}

export default SuperMarket


