import styles from "./page.module.scss";

/**
 * Формирует массив CSS классов для кнопки
 */
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
    .filter(Boolean) // Убираем falsy значения
    .join(" ");

  return classes;
};

/**
 * Проверяет, должна ли кнопка быть отключена
 */
export const isButtonDisabled = (
  disabled: boolean,
  loading: boolean
): boolean => {
  return disabled || loading;
};
