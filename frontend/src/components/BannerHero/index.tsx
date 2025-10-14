import styles from "./page.module.scss";
import cn from "classnames";

const BannerHero = () => {
  return (
    <div className={styles.bannerHero}>
      <h1 className={cn(styles.title, "h1")}>Welcome to our blog</h1>
      <p className={cn(styles.description, "light-16")}>
        Here you can find a lot of interesting and useful information that you
        need in gardening and creating a beautiful garden
      </p>
    </div>
  );
};

export default BannerHero;
