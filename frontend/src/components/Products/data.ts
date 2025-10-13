export const PRODUCTS = [
  {
    id: 1,
    title: "Seedra Cilantro Seeds for Planting Indoor and Outdoor",
    price: 12.56,
    category: "herbs",
    url: "/products/1",
  },
  {
    id: 2,
    title: "Seedra Basil Seeds - Sweet Basil for Kitchen Garden",
    price: 8.99,
    category: "herbs",
    url: "/products/2",
  },
  {
    id: 3,
    title: "Seedra Tomato Seeds - Cherry Tomatoes Variety Pack",
    price: 15.99,
    category: "vegetables",
    url: "/products/3",
  },
  {
    id: 4,
    title: "Seedra Carrot Seeds - Rainbow Carrot Mix",
    price: 11.5,
    category: "vegetables",
    url: "/products/4",
  },
  {
    id: 5,
    title: "Seedra Strawberry Seeds - Alpine Strawberry Collection",
    price: 18.75,
    category: "fruits",
    url: "/products/5",
  },
  {
    id: 6,
    title: "Seedra Sunflower Seeds - Giant Sunflower Mix",
    price: 9.99,
    category: "flowers",
    url: "/products/6",
  },
  {
    id: 7,
    title: "Seedra Rose Seeds - Wild Rose Collection",
    price: 22.0,
    category: "flowers",
    url: "/products/7",
  },
  {
    id: 8,
    title: "Seedra Gardening Tools Set - Complete Starter Kit",
    price: 45.99,
    category: "supplies",
    url: "/products/8",
  },
  {
    id: 9,
    title: "Seedra Organic Potting Soil - 5lb Bag",
    price: 12.99,
    category: "supplies",
    url: "/products/9",
  },
  {
    id: 10,
    title: "Seedra Herb Garden Bundle - 5 Popular Herbs",
    price: 35.99,
    category: "bundles",
    url: "/products/10",
  },
  {
    id: 11,
    title: "Seedra Vegetable Starter Bundle - 8 Essential Vegetables",
    price: 55.99,
    category: "bundles",
    url: "/products/11",
  },
];

export async function getProductById(id: number) {
  return PRODUCTS.find((product) => product.id === id);
}
