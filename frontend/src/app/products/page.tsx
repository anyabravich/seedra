"use client";

import Categories from "@/components/Categories";
import Container from "@/components/Container";
import ProductsGrid from "@/components/ProductsGrid";
import ProductsNavigation from "@/components/ProductsNavigation";
import { PRODUCTS } from "@/components/Products/data";
import { useProductsFilter } from "./hooks/useProductsFilter";

export default function Products() {
  const { activeIndex, filteredProducts, handleChangeCategory } =
    useProductsFilter(PRODUCTS);

  return (
    <Container>
      <ProductsNavigation />

      <Categories
        activeIndex={activeIndex}
        onChangeCategory={handleChangeCategory}
      />
      
      <ProductsGrid products={{ cards: filteredProducts }} />
    </Container>
  );
}
