import styles from "./page.module.scss";
import cn from "classnames";
import { BannerHeroProps } from "./types";

const BannerHero = ({ title, text, className }: BannerHeroProps) => {
  return (
    <div className={cn(styles.bannerHero, className)}>
      <h1 className={cn(styles.title, "h1")}>{title}</h1>
      <p className={cn(styles.description, "light-16")}>{text}</p>
    </div>
  );
};

export default BannerHero;
