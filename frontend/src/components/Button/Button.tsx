import styles from "./page.module.scss";
import { ButtonProps } from "./types";
import { VARIANT_CLASSES, SIZE_CLASSES } from "./constants";
import { buildButtonClasses, isButtonDisabled } from "./utils";
import { FC } from "react";

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "medium",
  className = "",
  loading = false,
  fullWidth = false,
  disabled,
  type = "button",
  ...restProps
}) => {
  const buttonClasses = buildButtonClasses(
    VARIANT_CLASSES[variant],
    SIZE_CLASSES[size],
    fullWidth,
    loading,
    disabled || false,
    className
  );

  const isDisabled = isButtonDisabled(disabled || false, loading);

  return (
    <button
      className={buttonClasses}
      type={type}
      disabled={isDisabled}
      {...restProps}
    >
      {loading ? (
        <span className={styles.loadingSpinner}>Loading...</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
