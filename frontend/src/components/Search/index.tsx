"use client";

import { FC, useState } from "react";

import Icons from "../Icons";
import Filters from "../Filters";
import { useClickOutside } from "@/hooks/useClickOutside";
import styles from "./page.module.scss";
import { ISearch } from "./types";

const Search: FC<ISearch> = ({ className }) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const ref = useClickOutside<HTMLFormElement>({
    isOpen: isOpenFilters,
    onClose: () => setIsOpenFilters(false),
  });

  return (
    <form ref={ref} className={`${styles["search"]} ${className}`}>
      <Icons iconName="search" />
      <input className={styles.input} type="text" placeholder="Search" />
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
export type { ISearch } from "./types";
