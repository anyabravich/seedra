"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Categories from "../Categories";
import Cards from "../Cards";
import Button from "../Button";
import { PRODUCTS } from "./data";

const Products = () => {
  const [category, setCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeCategory = (index: number, text: string) => {
    setCategory(text);
    setActiveIndex(index);
  };

  const filteredCards = PRODUCTS.filter((card) => card.category === category);
  const cardsView =
    filteredCards.length > 0
      ? filteredCards
      : category === "all"
      ? PRODUCTS
      : [];

  return (
    <section className={styles.products}>
      <Container className={styles.products__container}>
        <header className={styles.products__header}>
          <h2 className={`${styles.products__title} h2`}>Our products</h2>
          <Button className={`${styles.products__button}`} variant="border">
            View all ({PRODUCTS.length})
          </Button>
        </header>
        <Categories
          activeIndex={activeIndex}
          onChangeCategory={handleChangeCategory}
        />
        <Cards cards={cardsView} />
      </Container>
    </section>
  );
};

export default Products;
