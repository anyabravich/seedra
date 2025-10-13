import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={`${styles.footer__container} container`}>
        <div className={styles.footer__inner}>
          <ul className={styles.footer__menu}>
            <li className={styles.footer__item}>
              <Link
                className={`${styles.footer__link} regular-14`}
                href="/products"
              >
                ALL PRODUCTS
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link
                className={`${styles.footer__link} regular-14`}
                href="/about"
              >
                ABOUT SEEDRA
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link
                className={`${styles.footer__link} regular-14`}
                href="/blog"
              >
                OUR BLOG
              </Link>
            </li>
          </ul>
          {/* TODO: 🎯 добавить ссылку */}
          <Image
            className={styles.footer__logo}
            src="/logo.svg"
            alt="logo"
            width={125}
            height={27}
          />
          <ul className={styles.footer__menu}>
            <li className={styles.footer__item}>
              <Link className={`${styles.footer__link} regular-14`} href="/">
                Terms&Conditions
              </Link>
            </li>
            <li className={styles.footer__item}>
              <Link className={`${styles.footer__link} regular-14`} href="/">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer__bottom}>
          <ul className={styles.footer__socials}>
            <li className={styles["footer__socials-item"]}>
              <Link
                className={`${styles["footer__socials-link"]}`}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles["footer__socials-img"]}
                  src="/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className={styles["footer__socials-item"]}>
              <Link
                className={`${styles["footer__socials-link"]}`}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles["footer__socials-img"]}
                  src="/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
          <p className={`${styles.footer__copyright} regular-14`}>
            All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
