"use client";

import { FC, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Card from "../Card";
import { PRODUCTS } from "../Products/data";
import styles from "./page.module.scss";

const ProductsRelated: FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <section className={styles.productsRelated}>
      <h2 className={`${styles.title} h2`}>Related products.</h2>
      <div className={`slider`}>
        {isMobile ? (
          <Swiper slidesPerView={1.08} spaceBetween={11}>
            {PRODUCTS.map(props => (
              <SwiperSlide key={props.id}>
                <Card {...props} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className={styles.cards}>
            {PRODUCTS.map(props => (
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
