import styles from "./page.module.scss";
import Star from "../Icons/Icons/Stars/Star";
import StarHalf from "../Icons/Icons/Stars/StarHalf";
import StarEmpty from "../Icons/Icons/Stars/StarEmpty";

interface IRating {
  rating: number;
  size?: number;
  className?: string;
  ratingCount: number | boolean;
}

const Rating = ({ rating, ratingCount, className, size }: IRating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <li key={i} className={styles.rating__item}>
        <Star size={size || 16} />
      </li>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <li key="half" className={styles.rating__item}>
        <StarHalf size={size || 16} />
      </li>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <li key={stars.length} className={styles.rating__item}>
        <StarEmpty size={size || 16} />
      </li>
    );
  }

  return (
    <div className={`${styles.rating} ${className}`}>
      <ul className={styles.rating__list}>{stars}</ul>
      <span className={`${styles.rating__count} regular-14`}>
        {ratingCount && `(${ratingCount})`}
      </span>
    </div>
  );
};

export default Rating;
