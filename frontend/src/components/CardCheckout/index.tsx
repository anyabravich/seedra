"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import Quantity from "../Quantity";

interface ICardCheckout {
  name: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

const CardCheckout = ({
  name,
  price,
  quantity,
  onQuantityChange,
}: ICardCheckout) => {
  const totalPrice = (price * quantity).toFixed(2);

  return (
    <article className={styles["card-checkout"]}>
      <div className={styles["card-checkout__img-wrapper"]}>
        <Image src="/card-1.jpg" alt="checkout" fill sizes="100%" />
      </div>
      <p className={`${styles["card-checkout__title"]} regular-14`}>{name}</p>
      <Quantity
        className={styles["card-checkout__quantity"]}
        handleQuantityChange={onQuantityChange}
      />
      <p className={`${styles["card-checkout__price"]}`}>${price}</p>
      <p className={`${styles["card-checkout__total"]}`}>${totalPrice}</p>
    </article>
  );
};

export default CardCheckout;
