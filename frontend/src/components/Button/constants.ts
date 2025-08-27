import styles from "./page.module.scss";
import { ButtonVariant, ButtonSize } from "./types";

// Маппинг вариантов на CSS классы
export const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: styles._primary,
  secondary: styles._secondary,
  border: styles._border,
  icon: styles._icon,
};

// Маппинг размеров на CSS классы
export const SIZE_CLASSES: Record<ButtonSize, string> = {
  small: styles._small,
  medium: styles._medium,
  large: styles._large,
};
