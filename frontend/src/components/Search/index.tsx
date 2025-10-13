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
        className={styles["search__input"]}
        type="text"
        placeholder="Search"
      />
      <button
        className={styles["search__filter"]}
        type="button"
        onClick={() => setIsOpenFilters(!isOpenFilters)}
      >
        <Icons iconName="filter" />
      </button>
      {isOpenFilters && (
        <div className={styles["search__filters"]}>
          <i className={styles["search__triangle"]}></i>
          <div className={styles["search__filters-wrapper"]}>
            <Filters />
          </div>
        </div>
      )}
    </form>
  );
};

export default Search;
