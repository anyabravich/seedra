export const PRODUCTS = [
  {
    id: 1,
    title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    price: 12.56,
    category: "herbs",
    url: "/products/1",
  },
];

export async function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id === id);
}
