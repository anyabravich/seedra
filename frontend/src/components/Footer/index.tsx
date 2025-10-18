import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={`${styles.container} container`}>
        <div className={styles.inner}>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link className={`${styles.link} regular-14`} href="/products">
                ALL PRODUCTS
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={`${styles.link} regular-14`} href="/about">
                ABOUT SEEDRA
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={`${styles.link} regular-14`} href="/blog">
                OUR BLOG
              </Link>
            </li>
          </ul>
          <Image
            className={styles.logo}
            src="/logo.svg"
            alt="logo"
            width={125}
            height={27}
          />
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link className={`${styles.link} regular-14`} href="/">
                Terms&Conditions
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={`${styles.link} regular-14`} href="/">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.bottom}>
          <ul className={styles.socials}>
            <li className={styles.socialsItem}>
              <Link
                className={`${styles.socialsLink}`}
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles.socialsImg}
                  src="/instagram.svg"
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
            <li className={styles.socialsItem}>
              <Link
                className={`${styles.socialsLink}`}
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className={styles.socialsImg}
                  src="/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </li>
          </ul>
          <p className={`${styles.copyright} regular-14`}>
            All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
