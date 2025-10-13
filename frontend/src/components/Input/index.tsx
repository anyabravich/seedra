import styles from "./page.module.scss";

interface IInput {
  label: string;
  type: "checkbox" | "radio" | "text";
  className?: string;
  price?: string;
  name?: string;
}

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
      <input className={styles["input__input"]} type={type} name={name} />
      <span className={styles["input__box"]}></span>
      <span className={`${styles["input__label"]} regular-14 text-secondary`}>
        {label}
      </span>
      {price && (
        <div className={styles["input__price"]}>
          <span className="regular-14 text-secondary">start from</span>
          <span className="medium-16">${price}</span>
        </div>
      )}
    </label>
  );
};

export default Input;
