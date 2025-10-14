"use client";

import styles from "./page.module.scss";

import { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "../Rating";
import Icons from "../Icons";
import Favorite from "../Icons/Icons/Favorite";
import Link from "next/link";
import { IProduct } from "../Products/types";

const Card = ({ id, title, price, url }: IProduct) => {
  const [state, setState] = useState({
    favorite: false,
    goods: false,
  });

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const goods = JSON.parse(localStorage.getItem("goods") || "[]");

    const isFavorite = favorites.some((item: any) => item.id === id);
    const isGoods = goods.some((item: any) => item.id === id);

    setState({
      favorite: isFavorite,
      goods: isGoods,
    });
  }, [id]);

  const handleToggle = (type: "favorite" | "goods") => {
    const storageKey = type === "favorite" ? "favorites" : "goods";
    const items = JSON.parse(localStorage.getItem(storageKey) || "[]");
    const index = items.findIndex((item: any) => item.id === id);

    if (index !== -1) {
      items.splice(index, 1);
    } else {
      items.push({ id, title, price, url });
    }

    localStorage.setItem(storageKey, JSON.stringify(items));
    setState((prevState) => ({ ...prevState, [type]: !prevState[type] }));
  };

  return (
    <article className={styles.card}>
      <button
        className={styles.favorite}
        type="button"
        onClick={() => handleToggle("favorite")}
      >
        {state.favorite ? (
          <Favorite variant="yellow-fill" />
        ) : (
          <Favorite variant="yellow" />
        )}
      </button>
      <picture className={styles.picture}>
        <Image
          className={styles.image}
          src="/card-1.jpg"
          alt="card"
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
            className={`${styles.button} ${
              state.goods ? styles.add : ""
            }`}
            type="button"
            onClick={() => handleToggle("goods")}
          >
            {state.goods ? (
              <Icons iconName="add-cart" />
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
