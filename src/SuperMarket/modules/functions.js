const salesGenerator = (products) => {
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
}


export {
    salesGenerator
}