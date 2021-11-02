export const salesGenerator = () => {
  const categories = ['Cereal', 'Dairy', 'Meat', 'Baked Goods', 'Frozen Food']
  const idx = Math.floor(Math.random() * categories.length)
  return categories[idx]
}