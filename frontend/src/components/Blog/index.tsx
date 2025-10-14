"use client";

import { useEffect, useState } from "react";
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
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={`${styles.title} h2`}>Our blog.</h2>
          <Button className={`${styles.button}`} variant="border">
            Go to our blog
          </Button>
        </header>
        <div className={`${styles.cards} slider`}>
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
            <div className={styles.grid}>
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
