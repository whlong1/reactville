import { useState } from 'react'

// Components
import Cart from './Cart'
import NewProduct from './NewProduct'
import CategoryMenu from './CategoryMenu'
import DisplayProducts from './DisplayProducts'

// Data
import { productData } from './modules/data'


const SuperMarket = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState(productData)
  const [productCategory, setProductCategory] = useState('Cereal')


  const addToCart = (item) => {
    const idx = cart.findIndex(product => product.id === item.id)
    if (!idx) {
      const newArr = [...cart]
      item.quantity++
      newArr[idx] = item
      setCart(newArr)
    } else {
      item.quantity = 1
      setCart([item, ...cart])
    }
  }


  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      item.quantity--
      setCart(cart.map((prod) => prod.id === item.id ? item : prod))
    } else {
      setCart(cart.filter((prod) => prod.id !== item.id))
    }
  }


  return (
    <div>
      <h3>{productCategory}</h3>

      <Cart cart={cart} removeFromCart={removeFromCart} />

      <CategoryMenu
        products={products}
        setProductCategory={setProductCategory}
      />

      <DisplayProducts
        products={products}
        addToCart={addToCart}
        productCategory={productCategory}
      />

      <NewProduct products={products} />
    </div>
  )
}

export default SuperMarket


