import styles from "./page.module.scss";
import { IInput } from "./types";
import cn from "classnames";

const Input = ({
  label,
  type,
  className,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
}: IInput) => {
  return (
    <div className={`${styles.textInputContainer} ${className}`}>
      <label className={cn(styles.textLabel, "regular-14 text-secondary")}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`${styles.textInputField} text-secondary light-16 ${
          error ? styles.error : ""
        }`}
      />
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;
