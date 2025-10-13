import styles from "./page.module.scss";
import Image from "next/image";
import Rating from "../Rating";

const FeedbackCard = () => {
  return (
    <article className={styles["feedback-card"]}>
      <header className={styles["feedback-card__header"]}>
        <Image
          className={styles["feedback-card__image"]}
          src="/user.png"
          alt="user"
          width={64}
          height={64}
        />
        <div>
          <p className={`${styles["feedback-card__name"]} medium-18`}>
            Carla Samantoes-Diego
          </p>
          <time className={`${styles["feedback-card__time"]} regular-14`}>
            12.09.2021
          </time>
        </div>
      </header>
      <Rating
        className={styles["feedback-card__rating"]}
        rating={4.5}
        ratingCount={false}
        size={24}
      />
      <p className={`${styles["feedback-card__description"]} light-16`}>
        SEEDRA Spinach Seeds&nbsp;&mdash; contains 600 seeds
        in&nbsp;2&nbsp;Packs and professional instructions created by&nbsp;PhD
        Helga George Be&nbsp;sure of&nbsp;our quality&nbsp;&mdash; the freshest
        batches of&nbsp;this season. Non-GMO, Heirloom&nbsp;&mdash; our seeds
        were tested and have the best germination ratings.
      </p>
    </article>
  );
};

export default FeedbackCard;
