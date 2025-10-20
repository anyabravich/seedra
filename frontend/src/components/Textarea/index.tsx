import { FC } from "react";
import cn from "classnames";

import styles from "./page.module.scss";
import { ITextarea } from "./types";

const Textarea: FC<ITextarea> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  className = "",
}: ITextarea) => {
  return (
    <div className={`${styles.textInputContainer} ${className}`}>
      <label className={cn(styles.textLabel, "regular-14 text-secondary")}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>
      <textarea
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

export default Textarea;
export type { ITextarea } from "./types";
