import { FC } from "react";

import styles from "./page.module.scss";
import { ICheckbox } from "./types";

const Checkbox: FC<ICheckbox> = ({
  label,
  checked,
  onChange,
  disabled = false,
  className = "",
  name,
  price,
}: ICheckbox) => {
  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className={styles.inputField}
      />
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

export default Checkbox;
export type { ICheckbox } from "./types";
