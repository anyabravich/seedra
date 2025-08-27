import styles from "./page.module.scss";
import Button from "../Button";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";

interface IBlogCard {
  time: string;
  image: string;
  title: string;
  description: string;
  className?: string[];
  isSquare?: boolean;
}

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
        styles.blogcard,
        className && className.map((cls) => styles[cls])
      )}
    >
      <div className={styles.blogcard__content}>
        <time className={`${styles.blogcard__time} regular-14`}>
          <Image src="/clock.svg" alt="calendar" width={24} height={24} />
          {time}
        </time>
        <h3
          className={`${styles.blogcard__title} h3`}
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>
        {!isSquare ? (
          <p
            className={`${styles.blogcard__description} regular-14`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        ) : (
          <p
            className={`${styles.blogcard__description} ${styles._square} regular-14`}
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        )}
        <Link className={styles.blogcard__link} href="/blog/1">
          <Button variant="secondary">Read</Button>
        </Link>
      </div>
      <div className={styles.blogcard__image}>
        {image && (
          <Image src={image} alt="blog" fill sizes="100%" priority={true} />
        )}
      </div>
    </article>
  );
};

export default BlogCard;
