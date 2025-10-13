"use client";

import { useRef } from "react";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FeedbackCard from "../FeedbackCard";

type Swiper = /*unresolved*/ any;

const Feedback = () => {
  const swiperRef = useRef<Swiper | null>(null);

  const customizePagination = () => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const pagination = swiper.pagination;
      const bullets = pagination.bullets;

      bullets.forEach((bullet: HTMLElement, index: number) => {
        if (index >= swiper.slidesPerView - 1) {
          bullet.innerHTML = "";
        }
      });
    }
  };

  return (
    <section className={styles.feedback}>
      <h2 className={`${styles.feedback__title} h2`}>What out clients say</h2>

      <Swiper
        ref={swiperRef}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.feedback__swiper}
        onInit={customizePagination}
        onSlideChange={customizePagination}
        breakpoints={{
          320: {
            slidesPerView: 1.12,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.58,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
          },
        }}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index} className={styles.feedback__slide}>
            <FeedbackCard />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
};

export default Feedback;
