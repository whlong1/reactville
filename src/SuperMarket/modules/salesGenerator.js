export const salesGenerator = () => {
  const categories = ['Cereal', 'Dairy', 'Meat', 'Baked Goods', 'Frozen Food']
  const idx = Math.floor(Math.random() * categories.length)
  return categories[idx]
}

//generate another idx to select item from category?