import styles from "./page.module.scss";
import Star from "../Icons/Icons/Stars/Star";
import StarHalf from "../Icons/Icons/Stars/StarHalf";
import StarEmpty from "../Icons/Icons/Stars/StarEmpty";
import { IRating } from "./types";

const Rating = ({ rating, ratingCount, className, size }: IRating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <li key={i} className={styles.item}>
        <Star size={size || 16} />
      </li>
    );
  }

  if (hasHalfStar) {
    stars.push(
      <li key="half" className={styles.item}>
        <StarHalf size={size || 16} />
      </li>
    );
  }

  while (stars.length < 5) {
    stars.push(
      <li key={stars.length} className={styles.item}>
        <StarEmpty size={size || 16} />
      </li>
    );
  }

  return (
    <div className={`${styles.rating} ${className}`}>
      <ul className={styles.list}>{stars}</ul>
      <span className={`${styles.count} regular-14`}>
        {ratingCount && `(${ratingCount})`}
      </span>
    </div>
  );
};

export default Rating;
