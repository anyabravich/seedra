"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";
import { IQuantity } from "./types";

const Quantity = ({ className, handleQuantityChange }: IQuantity) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
    handleQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
    handleQuantityChange(quantity - 1);
  };

  return (
    <div className={`${styles.root} ${className}`}>
      <button
        className={styles.button}
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        <Icons iconName="minus" />
      </button>
      <output className={styles.value}>{quantity}</output>
      <button
        className={styles.button}
        type="button"
        onClick={handleIncrement}
      >
        <Icons iconName="plus" />
      </button>
    </div>
  );
};

export default Quantity;
