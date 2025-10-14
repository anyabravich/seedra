import styles from "./page.module.scss";
import Button from "../Button";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { IBlogCard } from "./types";

const BlogCard = ({
  className,
  time,
  image,
  title,
  description,
  isSquare,
}: IBlogCard) => {
  return (
    <article
      className={classNames(
        styles.blogCard,
        className && className.map((cls) => styles[cls])
      )}
    >
      <div className={styles.content}>
        <time className={`${styles.time} regular-14`}>
          <Image src="/clock.svg" alt="calendar" width={24} height={24} />
          {time}
        </time>
        <h3
          className={`${styles.title} h3`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        {!isSquare ? (
          <p
            className={`${styles.description} regular-14`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        ) : (
          <p
            className={`${styles.description} ${styles.square} regular-14`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
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
