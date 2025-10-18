import Icons from "../Icons";
import styles from "./page.module.scss";
import { ILabel } from "./types";

const Label = ({ text }: ILabel) => {
  return (
    <div
      className={`${styles.label} ${
        text === "available" && styles.available
      }`}
    >
      <Icons iconName={text as any} />
      <span className={`${styles.text} regular-14`}>{text}</span>
    </div>
  );
};

export default Label;
