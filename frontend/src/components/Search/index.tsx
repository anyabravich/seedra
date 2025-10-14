"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";
import Filters from "../Filters";
import { ISearch } from "./types";

const Search = ({ className }: ISearch) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  return (
    <form className={`${styles["search"]} ${className}`}>
      <Icons iconName="search" />
      <input
        className={styles.input}
        type="text"
        placeholder="Search"
      />
      <button
        className={styles.filter}
        type="button"
        onClick={() => setIsOpenFilters(!isOpenFilters)}
      >
        <Icons iconName="filter" />
      </button>
      {isOpenFilters && (
        <div className={styles.filters}>
          <i className={styles.triangle}></i>
          <div className={styles.filtersWrapper}>
            <Filters />
          </div>
        </div>
      )}
    </form>
  );
};

export default Search;
