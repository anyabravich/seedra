import { useMemo } from "react";
import Star from "../components/Icons/Icons/Stars/Star";
import StarHalf from "../components/Icons/Icons/Stars/StarHalf";
import StarEmpty from "../components/Icons/Icons/Stars/StarEmpty";
import styles from "../components/Rating/page.module.scss";

export interface UseRatingReturn {
  stars: React.JSX.Element[];
  normalizedRating: number;
}

export const useRating = (rating: number, size: number): UseRatingReturn => {
  const normalizedRating = useMemo(
    () => Math.max(0, Math.min(5, rating)),
    [rating]
  );

  const stars = useMemo(() => {
    const fullStars = Math.floor(normalizedRating);
    const hasHalfStar = normalizedRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const starElements = [];

    for (let i = 0; i < fullStars; i++) {
      starElements.push(
        <li key={`full-${i}`} className={styles.item}>
          <Star size={size} />
        </li>
      );
    }

    if (hasHalfStar) {
      starElements.push(
        <li key="half" className={styles.item}>
          <StarHalf size={size} />
        </li>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      starElements.push(
        <li key={`empty-${i}`} className={styles.item}>
          <StarEmpty size={size} />
        </li>
      );
    }

    return starElements;
  }, [normalizedRating, size]);

  return { stars, normalizedRating };
};
