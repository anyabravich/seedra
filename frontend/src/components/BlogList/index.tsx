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
}

const BlogList = ({ data, className }: BlogListProps) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={className}>
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
  );
};

export default BlogList;
