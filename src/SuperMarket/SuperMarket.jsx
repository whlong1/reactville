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
      console.log('hello')
      if (!aisle[product['category']]) {
        aisle[product['category']] = []
      }
      aisle[product['category']].push(product)
      return aisle
    }, [])
    return sorted
  }




  return (
    <div>
      {groupBy().map((list, idx)=>(
        <Aisle key={idx} list={list}/>
      ))}


    </div>
  )
}

export default SuperMarket
