import DisplayProducts from './DisplayProducts'
import CategoryMenu from './CategoryMenu'
import NewProduct from './NewProduct'
import Cart from './Cart'

import { productData } from './modules/data'
import { salesGenerator } from './modules/functions'
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
    case 'REMOVE_FROM_CART':
      return
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

const SuperMarket = () => {
  const [cartState, dispatch] = useReducer(reducer, [])


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


