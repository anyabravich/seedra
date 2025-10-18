import styles from "./page.module.scss";

export const buildButtonClasses = (
  variant: string,
  size: string,
  fullWidth: boolean,
  loading: boolean,
  disabled: boolean,
  customClassName?: string
): string => {
  const classes = [
    styles.button,
    variant,
    size,
    fullWidth && styles._fullWidth,
    loading && styles._loading,
    disabled && styles._disabled,
    customClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return classes;
};

export const isButtonDisabled = (
  disabled: boolean,
  loading: boolean
): boolean => {
  return disabled || loading;
};
