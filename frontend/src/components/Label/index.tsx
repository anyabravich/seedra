import Icons from "../Icons";
import styles from "./page.module.scss";

interface ILabel {
  text: string;
}

const Label = ({ text }: ILabel) => {
  return (
    <div
      className={`${styles["label"]} ${
        text === "available" && styles["_available"]
      }`}
    >
      <Icons iconName={text} />
      <span className={`${styles["label__text"]} regular-14`}>{text}</span>
    </div>
  );
};

export default Label;
