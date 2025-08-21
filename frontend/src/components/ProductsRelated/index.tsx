"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";
import { PRODUCTS } from "../Products/data";

const ProductsRelated = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className={styles["products-related"]}>
      <h2 className={`${styles["products-related__title"]} h2`}>
        Related products.
      </h2>
      <div className={`slider`}>
        {isMobile ? (
          <Swiper slidesPerView={1.08} spaceBetween={11}>
            {PRODUCTS.map((props) => (
              <SwiperSlide key={props.id}>
                <Card {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles["products-related__cards"]}>
            {PRODUCTS.map((props) => (
              <div key={props.id}>
                <Card {...props} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsRelated;
