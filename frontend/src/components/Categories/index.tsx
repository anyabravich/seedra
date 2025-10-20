"use client";

import { FC } from "react";

import Category from "../Category";
import { categories } from "./data";
import styles from "./page.module.scss";
import { ICategories } from "./types";

const Categories: FC<ICategories> = ({ activeIndex, onChangeCategory }) => {
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
export type { ICategories } from "./types";
