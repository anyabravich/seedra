import { FC } from "react";

import Icons from "../Icons";
import styles from "./page.module.scss";
import { ICategory } from "./types";

const Category: FC<ICategory> = ({ text, isActive, onClick, className }) => {
  return (
    <button
      className={`${styles.category} ${isActive && styles._active} ${
        className || ""
      }`}
      type="button"
      onClick={onClick}
    >
      <Icons className={styles.icon} iconName={text as any} />
      <span className={`${styles.text} regular-14`}>{text}</span>
    </button>
  );
};

export default Category;
export type { ICategory } from "./types";
