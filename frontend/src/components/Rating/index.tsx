import styles from "./page.module.scss";
import { IRating } from "./types";
import { useRating, UseRatingReturn } from "../../hooks/useRating";

const Rating = ({
  rating,
  ratingCount,
  className,
  size = 16,
  showCount = true,
}: IRating) => {
  const { stars, normalizedRating }: UseRatingReturn = useRating(rating, size);

  return (
    <div className={`${styles.rating} ${className || ""}`}>
      <ul
        className={styles.list}
        role="img"
        aria-label={`Рейтинг ${normalizedRating} из 5 звезд`}
      >
        {stars}
      </ul>
      {showCount && ratingCount && (
        <span className={`${styles.count} regular-14`}>({ratingCount})</span>
      )}
    </div>
  );
};

export default Rating;
