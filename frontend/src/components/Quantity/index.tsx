"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

interface IQuantity {
  className?: string;
  handleQuantityChange: (newQuantity: number) => void;
}

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
    <div className={`${styles["quantity"]} ${className}`}>
      <button
        className={styles["quantity__button"]}
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        <Icons iconName="minus" />
      </button>
      <output className={styles["quantity__value"]}>{quantity}</output>
      <button
        className={styles["quantity__button"]}
        type="button"
        onClick={handleIncrement}
      >
        <Icons iconName="plus" />
      </button>
    </div>
  );
};

export default Quantity;
