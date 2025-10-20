import { FC } from "react";
import cn from "classnames";

import styles from "./page.module.scss";
import { BannerHeroProps } from "./types";

const BannerHero: FC<BannerHeroProps> = ({ title, text, className }) => {
  return (
    <div className={cn(styles.bannerHero, className)}>
      <h1 className={cn(styles.title, "h1")}>{title}</h1>
      <p className={cn(styles.description, "light-16")}>{text}</p>
    </div>
  );
};

export default BannerHero;
export type { BannerHeroProps } from "./types";
