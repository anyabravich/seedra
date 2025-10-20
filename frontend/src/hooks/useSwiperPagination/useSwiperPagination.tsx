import { useRef, useCallback } from "react";
import { SwiperRef } from "swiper/react";

export const useSwiperPagination = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const customizePagination = useCallback(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;
      const pagination = swiper.pagination;
      const bullets = pagination.bullets;

      bullets.forEach((bullet: HTMLElement, index: number) => {
        const slidesPerView = swiper.params.slidesPerView;
        if (typeof slidesPerView === "number" && index >= slidesPerView - 1) {
          bullet.innerHTML = "";
        }
      });
    }
  }, []);

  return { swiperRef, customizePagination };
};
