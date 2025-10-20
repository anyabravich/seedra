"use client";

import { FC } from "react";

import Container from "../Container";
import Categories from "../Categories";
import Cards from "../Cards";
import Button from "../Button";
import { useProductFilter } from "@/hooks/useProductFilter";
import { PRODUCTS } from "./data";
import styles from "./page.module.scss";

const Products: FC = () => {
  const { activeIndex, filteredProducts, handleChangeCategory } =
    useProductFilter({ products: PRODUCTS });

  return (
    <section className={styles.products}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={`${styles.title} h2`}>Our products</h2>
          <Button className={styles.button} variant="border">
            View all ({PRODUCTS.length})
          </Button>
        </header>

        <Categories
          activeIndex={activeIndex}
          onChangeCategory={handleChangeCategory}
        />
        <Cards cards={filteredProducts} />
      </Container>
    </section>
  );
};

export default Products;
export type { IProductsProps } from "./types";
