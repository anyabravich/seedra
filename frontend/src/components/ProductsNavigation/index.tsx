"use client";

import React, { useEffect, useState } from "react";
import Search from "../Search";
import Select from "react-select";

import styles from "./page.module.scss";

const options = [
  { value: "most-expensive", label: "Most expensive" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ProductsNavigation = () => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(options[0]);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <div className={styles["products-navigation"]}>
      {isMounted ? (
        <>
          <Search className={styles["products-navigation__search"]} />
          <Select
            className={styles["products-navigation__select"]}
            value={selectedOption}
            onChange={(newValue) => setSelectedOption(newValue)}
            options={options}
            isSearchable={false}
            formatOptionLabel={(option) => (
              <div>
                <span>{option.label}</span>
              </div>
            )}
            components={{
              SingleValue: () => (
                <div className={styles["products-navigation__single-value"]}>
                  <span className="regular-14 text-secondary">Sort by:</span>
                  <span className="card-title">{selectedOption?.label}</span>
                </div>
              ),
            }}
            styles={{
              container: (base) => ({
                ...base,
                height: "100%",
                width: "16rem",
              }),
              control: (base) => ({
                ...base,
                height: "100%",
                borderRadius: "4.4375rem",
                overflow: "hidden",
                padding: "0 1rem",
                borderColor: "var(--light-grey-stroke)",
                backgroundColor: "transparent",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  borderColor: "var(--light-grey-stroke)",
                },
              }),
              valueContainer: (base) => ({
                ...base,
                padding: "0",
                margin: "0",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }),
              input: (base) => ({
                ...base,
                margin: "0",
                padding: "0",
              }),
              singleValue: (base) => ({
                ...base,
                margin: "0",
                padding: "0",
                height: "100%",
                display: "flex",
                alignItems: "center",
              }),
              indicatorSeparator: (base) => ({
                ...base,
                display: "none",
              }),
              indicatorsContainer: (base, { selectProps }) => ({
                ...base,
                svg: {
                  width: "1.5rem",
                  height: "1.5rem",
                  transform: selectProps.menuIsOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                },
              }),
            }}
          />
        </>
      ) : null}
    </div>
  );
};

export default ProductsNavigation;
