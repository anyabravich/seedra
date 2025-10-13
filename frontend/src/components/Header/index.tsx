import Container from "../Container";
import Navigation from "../Navigation";
import styles from "./page.module.scss";
import Link from "next/link";
import Icons from "../Icons";
import Search from "../Search";
import Button from "../Button";
import Favorite from "../Icons/Icons/Favorite";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <Link className={styles.logo} href="/">
          <Image src="/logo.svg" alt="logo" width={97} height={21} />
        </Link>
        <Navigation />
        <ul className={styles.socials}>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons iconName="instagram" />
            </a>
          </li>
          <li className={styles.socialItem}>
            <a
              className={styles.socialLink}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons iconName="facebook" />
            </a>
          </li>
        </ul>
        <Search />
        <ul className={styles.buttons}>
          <li className={styles.buttonItem}>
            <Link href="/favorite">
              <Button variant="icon">
                <Favorite variant="green" />
              </Button>
            </Link>
          </li>
          <li className={styles.buttonItem}>
            <Link href="/cart">
              <Button variant="icon">
                <Icons iconName="basket" />
              </Button>
            </Link>
          </li>
          <li className={`${styles.buttonItem} ${styles.menuButton}`}>
            <Button variant="icon">
              <Icons iconName="menu" />
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
