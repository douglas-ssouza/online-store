export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();

  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId = '', query = '') {
  let endpoint = '';

  if (query === '') {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  } else if (categoryId === '') {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  } else {
    endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  }

  const response = await fetch(endpoint);
  const products = await response.json();

  return products;
}
