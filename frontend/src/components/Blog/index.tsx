"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import BlogCard from "../BlogCard";
import Button from "../Button";
import { data } from "./data";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

const Blog = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }
  return (
    <section className={styles.blog}>
      <Container className={styles.blog__container}>
        <header className={styles.blog__header}>
          <h2 className={`${styles.blog__title} h2`}>Our blog.</h2>
          <Button className={`${styles.blog__button}`} variant="border">
            Go to our blog
          </Button>
        </header>
        <div className={`${styles.blog__cards} slider`}>
          {isMobile ? (
            <Swiper slidesPerView={1.08} spaceBetween={11}>
              {data.map(
                (
                  { className, time, image, title, description, isSquare },
                  index
                ) => (
                  <SwiperSlide key={index}>
                    <BlogCard
                      key={index}
                      className={className}
                      time={time}
                      image={image}
                      title={title}
                      isSquare={isSquare}
                      description={description}
                    />
                  </SwiperSlide>
                )
              )}
            </Swiper>
          ) : (
            <div className={styles.blog__grid}>
              {data.map(
                (
                  { className, time, image, title, description, isSquare },
                  index
                ) => (
                  <BlogCard
                    key={index}
                    className={className}
                    time={time}
                    image={image}
                    title={title}
                    isSquare={isSquare}
                    description={description}
                  />
                )
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Blog;
