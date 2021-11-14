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
  const [saleItem, setSaleItem] = useState(() => salesGenerator(products))
  const [productCategory, setProductCategory] = useState('Cereal')



  const addToCart = ({ ...item }) => {
    item.price = item.id === saleItem.id ? (item.price / 2).toFixed(2) : item.price
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
        addToCart={addToCart}
        saleItem={saleItem}
        products={products}
        productCategory={productCategory}
      />

      <NewProduct products={products} />
    </div>
  )
}

export default SuperMarket


