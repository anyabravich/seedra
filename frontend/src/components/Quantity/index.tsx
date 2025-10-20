"use client";
import React, { FC } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";
import { IQuantity } from "./types";

const Quantity: FC<IQuantity> = ({ 
  value, 
  onChange, 
  min = 1, 
  max, 
  className 
}) => {
  const handleIncrement = () => {
    const newValue = value + 1;
    if (!max || newValue <= max) {
      onChange(newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = value - 1;
    if (newValue >= min) {
      onChange(newValue);
    }
  };

  return (
    <div className={`${styles.root} ${className || ""}`}>
      <button
        className={styles.button}
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
      >
        <Icons iconName="minus" />
      </button>
      <output className={styles.value}>{value}</output>
      <button
        className={styles.button}
        type="button"
        onClick={handleIncrement}
        disabled={max ? value >= max : false}
      >
        <Icons iconName="plus" />
      </button>
    </div>
  );
};

export default Quantity;
export type { IQuantity } from "./types";
