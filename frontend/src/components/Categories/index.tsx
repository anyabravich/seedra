"use client";

import Category from "../Category";
import styles from "./page.module.scss";
import { categories } from "./data";
import { ICategories } from "./types";

const Categories = ({ activeIndex, onChangeCategory }: ICategories) => {
  return (
    <ul className={styles.categories}>
      {categories.map((text, index) => (
        <Category
          key={text}
          text={text}
          isActive={index === activeIndex}
          onClick={() => onChangeCategory(index, text)}
        />
      ))}
    </ul>
  );
};

export default Categories;
