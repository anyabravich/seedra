"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menu } from "./data";
import styles from "./page.module.scss";
import { MenuItem } from "./types";

const Navigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        {menu.map(({ name, link }: MenuItem) => {
          const isActive = pathname === link;
          return (
            <li className={styles.item} key={name}>
              <Link
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                href={link}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
