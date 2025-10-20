import { FC } from "react";

import Icons from "../Icons";
import styles from "./page.module.scss";
import { ILabel } from "./types";

const Label: FC<ILabel> = ({ text }) => {
  return (
    <div
      className={`${styles.label} ${text === "available" && styles.available}`}
    >
      <Icons iconName={text as any} />
      <span className={`${styles.text} regular-14`}>{text}</span>
    </div>
  );
};

export default Label;
export type { ILabel } from "./types";
