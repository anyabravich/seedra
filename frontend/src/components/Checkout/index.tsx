"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import CardCheckout from "../CardCheckout";

interface ICard {
  id: number;
  name: string;
  price: number;
}

interface ICheckout {
  goods: ICard[];
}

interface Quantities {
  [id: string]: number;
}

const Checkout = ({ goods }: ICheckout) => {
  const [quantities, setQuantities] = useState<Quantities>(() => {
    return goods.reduce((acc, item) => {
      acc[item.id] = acc[item.id] || 1;
      return acc;
    }, {} as Quantities);
  });

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: newQuantity,
    }));
  };

  const total = Math.round(
    goods.reduce(
      (acc, item) => acc + Number(item.price) * (quantities[item.id] || 1),
      0
    )
  );

  const totalItems = goods.reduce(
    (acc, item) => acc + (quantities[item.id] || 1),
    0
  );

  return (
    <section className={styles["checkout"]}>
      <ul className={styles["checkout__list"]}>
        {goods.map((item) => (
          <li key={item.id} className={styles["checkout__item"]}>
            <CardCheckout
              name={item.name}
              price={item.price}
              quantity={quantities[item.id] || 1}
              onQuantityChange={(newQuantity) =>
                handleQuantityChange(item.id, newQuantity)
              }
            />
          </li>
        ))}
      </ul>
      <aside className={`${styles["checkout__summary"]} ${styles["summary"]}`}>
        <p className={styles["summary__title"]}>Order summary</p>
        <p className={styles["summary__total"]}>
          <span className={styles["summary__total-count"]}>
            {totalItems} ITEMS
          </span>
          <span className={styles["summary__total-price"]}>${total}</span>
        </p>
      </aside>
    </section>
  );
};

export default Checkout;
