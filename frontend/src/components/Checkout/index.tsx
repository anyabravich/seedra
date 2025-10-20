"use client";

import { FC } from "react";
import CardCheckout from "../CardCheckout";
import { useCheckout } from "@/hooks/useCheckout";
import { ICheckoutProps } from "./types";
import styles from "./page.module.scss";

const Checkout: FC<ICheckoutProps> = ({ goods }) => {
  const { total, totalItems, getItemQuantity, handleQuantityChange } =
    useCheckout({ goods });

  return (
    <section className={styles.checkout}>
      <ul className={styles.list}>
        {goods.map(item => (
          <li key={item.id} className={styles.item}>
            <CardCheckout
              name={item.name}
              price={item.price}
              quantity={getItemQuantity(item.id)}
              onQuantityChange={newQuantity =>
                handleQuantityChange(item.id, newQuantity)
              }
            />
          </li>
        ))}
      </ul>
      <aside className={styles.summary}>
        <p className={styles.title}>Order summary</p>
        <p className={styles.total}>
          <span className={styles.totalCount}>{totalItems} ITEMS</span>
          <span className={styles.totalPrice}>${total}</span>
        </p>
      </aside>
    </section>
  );
};

export default Checkout;
export type { ICheckoutProps } from "./types";
