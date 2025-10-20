import { FC } from "react";

import styles from "./page.module.scss";
import { IContainer } from "./types";

const Container: FC<IContainer> = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
export type { IContainer } from "./types";
