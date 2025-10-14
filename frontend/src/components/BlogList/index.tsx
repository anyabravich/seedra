"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogCard from "../BlogCard";
import { BlogDataItem } from "../../types/blog";
import styles from "./page.module.scss";

interface BlogListProps {
  data: BlogDataItem[];
  className?: string;
  limit?: number;
  disableSlider?: boolean;
}

const BlogList = ({
  data,
  className,
  limit,
  disableSlider = false,
}: BlogListProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const displayData = limit ? data.slice(0, limit) : data;

  const renderBlogCards = () => {
    return displayData.map(
      (
        {
          time,
          image,
          title,
          description,
          isHorizontal,
          isVertical,
          isSquare,
          isGreen,
          isWhite,
        },
        index
      ) => (
        <BlogCard
          key={index}
          time={time}
          image={image}
          title={title}
          isHorizontal={isHorizontal}
          isVertical={isVertical}
          isSquare={isSquare}
          isGreen={isGreen}
          isWhite={isWhite}
          description={description}
        />
      )
    );
  };

  return (
    <div className={className}>
      {isMobile && !disableSlider ? (
        <Swiper slidesPerView={1.08} spaceBetween={11}>
          {displayData.map(
            (
              {
                time,
                image,
                title,
                description,
                isHorizontal,
                isVertical,
                isSquare,
                isGreen,
                isWhite,
              },
              index
            ) => (
              <SwiperSlide key={index}>
                <BlogCard
                  key={index}
                  time={time}
                  image={image}
                  title={title}
                  isHorizontal={isHorizontal}
                  isVertical={isVertical}
                  isSquare={isSquare}
                  isGreen={isGreen}
                  isWhite={isWhite}
                  description={description}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      ) : (
        <div className={isMobile ? styles.mobileVertical : styles.grid}>
          {renderBlogCards()}
        </div>
      )}
    </div>
  );
};

export default BlogList;
