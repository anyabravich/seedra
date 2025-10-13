import styles from "./page.module.scss";

import Icons from "../Icons";
import { ICategory } from "./types";

const Category = ({ text, isActive, onClick, className }: ICategory) => {
  return (
    <button
      className={`${styles.category} ${isActive && styles._active} ${
        className || ""
      }`}
      type="button"
      onClick={onClick}
    >
      <Icons className={styles.icon} iconName={text} />
      <span className={`${styles.text} regular-14`}>{text}</span>
    </button>
  );
};

export default Category;
