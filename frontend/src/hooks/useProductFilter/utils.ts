import { IProduct } from "./types";

export const filterProductsByCategory = (
  products: IProduct[],
  category: string
): IProduct[] => {
  if (category === "all") {
    return products;
  }

  return products.filter(product => product.category === category);
};

export const getProductsView = (
  filteredProducts: IProduct[],
  category: string,
  allProducts: IProduct[]
): IProduct[] => {
  if (filteredProducts.length > 0) {
    return filteredProducts;
  }

  return category === "all" ? allProducts : [];
};

export const getTotalProductsCount = (products: IProduct[]): number => {
  return products.length;
};
