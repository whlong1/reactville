const salesGenerator = (products) => {
    const idx = Math.floor(Math.random() * products.length)
    return products[idx]
}

const getMinutes = (str) => {
    const timeArr = str.split(':')
    const suffix = str.split(' ')[1] === 'PM' ? 720 : 0
    if (timeArr[0] === '12') return suffix === 0 ? 0 : 720
    return parseInt(timeArr[0]) * 60 + parseInt(timeArr[1]) + suffix
}

export {
    salesGenerator,
    getMinutes
}
