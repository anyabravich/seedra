"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "../Container";
import Navigation from "../Navigation";
import styles from "./page.module.scss";
import Link from "next/link";
import Icons from "../Icons";
import Search from "../Search";
import Button from "../Button";
import Favorite from "../Icons/Icons/Favorite";
import Image from "next/image";
import { socialLinks, headerButtons } from "./data";
import { menu } from "../Navigation/data";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.container}>
          <Link className={styles.logo} href="/">
            <Image src="/logo.svg" alt="logo" width={97} height={21} />
          </Link>

          <Navigation />

          <ul className={styles.socials}>
            {socialLinks.map((social, index) => (
              <li key={index} className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icons iconName={social.iconName} />
                </a>
              </li>
            ))}
          </ul>

          <Search />

          <ul className={styles.buttons}>
            {headerButtons.map((button, index) => (
              <li
                key={index}
                className={`${styles.buttonItem} ${
                  button.className ? styles[button.className] : ""
                }`}
              >
                {button.href ? (
                  <Link href={button.href}>
                    <Button variant="icon">
                      {button.isCustomIcon ? (
                        <Favorite variant={button.iconVariant || "green"} />
                      ) : (
                        <Icons iconName={button.iconName as any} />
                      )}
                    </Button>
                  </Link>
                ) : button.iconName === "menu" ? (
                  <Button variant="icon" onClick={toggleMobileMenu}>
                    <Icons iconName={button.iconName as any} />
                  </Button>
                ) : (
                  <Button variant="icon">
                    <Icons iconName={button.iconName as any} />
                  </Button>
                )}
              </li>
            ))}
          </ul>
        </Container>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuOverlay} onClick={closeMobileMenu} />
      )}
      <div
        className={`${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <div className={styles.mobileMenuContent}>
          <div className={styles.mobileMenuHeader}>
            <Link
              className={styles.mobileMenuLogo}
              href="/"
              onClick={closeMobileMenu}
            >
              <Image src="/logo.svg" alt="logo" width={97} height={21} />
            </Link>
            <Button
              variant="icon"
              onClick={closeMobileMenu}
              className={styles.closeButton}
            >
              <Icons iconName="close" />
            </Button>
          </div>

          <nav className={styles.mobileMenuNav}>
            <ul className={styles.mobileMenuList}>
              {menu.map(({ name, link }) => {
                const isActive = pathname === link;
                return (
                  <li key={name} className={styles.mobileMenuItem}>
                    <Link
                      className={`${styles.mobileMenuLink} ${
                        isActive ? styles.active : ""
                      }`}
                      href={link}
                      onClick={closeMobileMenu}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.mobileMenuSocials}>
            <span className={styles.mobileMenuSocialsTitle}>Follow us</span>
            <ul className={styles.mobileMenuSocialsList}>
              {socialLinks.map((social, index) => (
                <li key={index} className={styles.mobileMenuSocialItem}>
                  <a
                    className={styles.mobileMenuSocialLink}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icons iconName={social.iconName} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.mobileMenuActions}>
            <Link
              href="/favorite"
              onClick={closeMobileMenu}
              className={styles.mobileMenuActionButton}
            >
              <Favorite variant="green" />
            </Link>
            <Link
              href="/cart"
              onClick={closeMobileMenu}
              className={styles.mobileMenuActionButton}
            >
              <Icons iconName="basket" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
