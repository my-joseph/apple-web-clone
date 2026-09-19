const createShelft = (id, categoryId, title, subtitle) => ({
  id,
  categoryId,
  title,
  subtitle,
});

export function getCardsShelfData() {
  return [
    createShelft(1, 1, "All Models", "Take your pick"),
    createShelft(2, 1, "Shopping Guides", "Can’t decide? Start here."),
    createShelft(3, 1, "Ways to save", "Find what works for you."),
  ];
}

export function groupedProductsByCardsShelf(products) {
  return products.reduce((acc, product) => {
    const key = product.shelfId;
    acc[key] ??= [];
    acc[key].push(product);
    return acc;
  }, {});
}

export function getCardsShelf(cardsShelf, products) {
  const grouped = groupedProductsByCardsShelf(products);
  return {
    ...cardsShelf,
    products: grouped[cardsShelf.id],
  };
}
