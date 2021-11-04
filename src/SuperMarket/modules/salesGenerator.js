export const salesGenerator = (products) => {
  const categories = ['Cereal', 'Dairy', 'Meat', 'Baked Goods', 'Frozen Food']
  const catIdx = Math.floor(Math.random() * categories.length)

  const selectedCategories = products[categories[catIdx]]
  const prodIdx = Math.floor(Math.random() * selectedCategories.length)


  return selectedCategories[prodIdx]
}

//generate another idx to select item from category?
//take in array of data as param, look at length of category
//select 1 element from that category to be on sale