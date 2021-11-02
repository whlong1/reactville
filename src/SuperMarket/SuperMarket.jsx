import Aisle from "./Aisle"

const SuperMarket = () => {
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



  function groupBy() {
    const sorted = products.reduce(function (aisle, product) {
      if (!aisle[product['category']]) {
        aisle[product['category']] = []
      }
      aisle[product['category']].push(product)
      return aisle
    }, [])
    return Object.values(sorted)
  }


  return (
    <div style={{ display: 'flex' }}>
      {groupBy().map((productList, idx) => (
        <Aisle key={idx} productList={productList} />
      ))}
    </div>
  )
}

export default SuperMarket
