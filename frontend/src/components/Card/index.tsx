"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "../Rating";
import Icons from "../Icons";
import Favorite from "../Icons/Icons/Favorite";
import { useFavorites } from "@/hooks/useFavorites";
import { ICardProps } from "./types";
import styles from "./page.module.scss";

const Card: FC<ICardProps> = ({ id, title, price, url }) => {
  const { isFavorite, isInCart, toggleFavorite, toggleCart } = useFavorites(
    id,
    { title, price, url }
  );

  return (
    <article className={styles.card}>
      <button
        className={styles.favorite}
        type="button"
        onClick={toggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? (
          <Favorite variant="yellow-fill" />
        ) : (
          <Favorite variant="yellow" />
        )}
      </button>
      <picture className={styles.picture}>
        <Image
          className={styles.image}
          src="/card-1.jpg"
          alt={title}
          priority={true}
          fill
        />
      </picture>
      <div className={styles.content}>
        <Rating rating={4.5} ratingCount={123} />
        <Link className={styles.title} href={url || "/products"}>
          {title}
        </Link>
        <footer className={styles.footer}>
          <p className={styles.price}>${price}</p>
          <button
            className={`${styles.button} ${isInCart ? styles.add : ""}`}
            type="button"
            onClick={toggleCart}
            aria-label={isInCart ? "Remove from cart" : "Add to cart"}
          >
            {isInCart ? (
              <Icons iconName="available" />
            ) : (
              <Icons iconName="basket" />
            )}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Card;
export type { ICardProps } from "./types";
