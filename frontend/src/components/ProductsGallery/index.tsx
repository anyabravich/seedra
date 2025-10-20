"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { SLIDES } from "./data";
import { Swiper as SwiperType } from "./types";

const ProductsGallery: FC = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div>
      <Swiper
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="products-thumb"
      >
        {SLIDES.map(({ id, url, width, height, alt }) => (
          <SwiperSlide key={id}>
            <Image
              src={url}
              alt={alt}
              width={width}
              height={height}
              priority={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={swiper => setThumbsSwiper(swiper)}
        spaceBetween={8}
        slidesPerView={"auto"}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="products-preview"
      >
        <SwiperSlide>
          <Image
            src={"/images/products/products-preview-1.jpeg"}
            alt=""
            width={445}
            height={445}
            priority={true}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsGallery;
