"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Card from "../Card";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IProduct } from "../Products/types";

const Cards = ({ cards }: { cards: IProduct[] }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`${styles.cards} slider`}>
      {isMobile ? (
        <Swiper slidesPerView={1.08} spaceBetween={11}>
          {cards.map((props, index) => (
            <SwiperSlide key={index}>
              <Card {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div
          className={`${styles.container} ${
            cards.length === 0 && styles.empty
          }`}
        >
          {cards.length > 0 ? (
            cards.map((props, index) => (
              <div key={index}>
                <Card {...props} />
              </div>
            ))
          ) : (
            <p className={styles.emptyText}>В этой категории нет товаров</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Cards;
