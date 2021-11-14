const salesGenerator = (products) => {
    console.log('sales gen running')
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
}

//Lazy loading initial state
//https://kentcdodds.com/blog/use-state-lazy-initialization-and-function-updates

export {
    salesGenerator
}