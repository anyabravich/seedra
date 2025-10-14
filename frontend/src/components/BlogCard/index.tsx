import styles from "./page.module.scss";
import Button from "../Button";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { IBlogCard } from "./types";

const BlogCard = ({
  time,
  image,
  title,
  description,
  isHorizontal,
  isVertical,
  isSquare,
  isGreen,
  isWhite,
}: IBlogCard) => {
  return (
    <article
      className={classNames(styles.blogCard, {
        [styles._horizontal]: isHorizontal,
        [styles._vertical]: isVertical,
        [styles._square]: isSquare,
        [styles._green]: isGreen,
        [styles._white]: isWhite,
      })}
    >
      <div className={styles.content}>
        <time className={`${styles.time} regular-14`}>
          <Image src="/clock.svg" alt="calendar" width={24} height={24} />
          {time}
        </time>
        <div className={styles.titleBlock}>
          <h3
            className={`${styles.title} h3`}
            dangerouslySetInnerHTML={{ __html: title }}
          ></h3>
          {description && (
            <p
              className={`${styles.description} ${
                isSquare ? styles.square : ""
              } regular-14`}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
        </div>
        <Link className={styles.link} href="/blog/1">
          <Button variant="secondary">Read</Button>
        </Link>
      </div>
      <div className={styles.image}>
        {image && (
          <Image src={image} alt="blog" fill sizes="100%" priority={true} />
        )}
      </div>
    </article>
  );
};

export default BlogCard;
