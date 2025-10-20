"use client";

import { FC } from "react";
import Image from "next/image";

import Quantity from "../Quantity";
import styles from "./page.module.scss";
import { ICardCheckout } from "./types";

const CardCheckout: FC<ICardCheckout> = ({
  name,
  price,
  quantity,
  onQuantityChange,
}: ICardCheckout) => {
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <article className={styles.cardCheckout}>
      <div className={styles.imgWrapper}>
        <Image src="/card-1.jpg" alt="checkout" fill sizes="100%" />
      </div>
      <p className={`${styles.title} regular-14`}>{name}</p>
      <Quantity
        className={styles.quantity}
        value={quantity}
        onChange={onQuantityChange}
        min={1}
      />
      <p className={`${styles.price}`}>${price}</p>
      <p className={`${styles.total}`}>${totalPrice}</p>
    </article>
  );
};

export default CardCheckout;
export type { ICardCheckout } from "./types";
