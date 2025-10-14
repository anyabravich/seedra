import styles from "./page.module.scss";
import { IInput } from "./types";

const Input = ({ label, type, className, price, name }: IInput) => {
  return (
    <label
      className={`${styles["input"]} ${className && styles[className]} ${
        type === "checkbox"
          ? styles["_checkbox"]
          : type === "radio"
          ? styles["_radio"]
          : styles["_text"]
      }`}
    >
      <input className={styles.inputField} type={type} name={name} />
      <span className={styles.box}></span>
      <span className={`${styles.label} regular-14 text-secondary`}>
        {label}
      </span>
      {price && (
        <div className={styles.price}>
          <span className="regular-14 text-secondary">start from</span>
          <span className="medium-16">${price}</span>
        </div>
      )}
    </label>
  );
};

export default Input;
