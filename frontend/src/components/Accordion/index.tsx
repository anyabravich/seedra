"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import Icons from "../Icons";
import { IAccordion } from "./types";

const Accordion = ({ title, children }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <header
        className={styles.header}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${styles.title} medium-16`}>{title}</p>
        <motion.div
          className={styles.arrow}
          initial={{ rotate: 0 }}
          whileInView={{
            rotate: isOpen ? 180 : 0,
            color: isOpen ? "var(--green-brand)" : "var(--text-secondary)",
          }}
          transition={{ duration: 0.3 }}
        >
          <Icons iconName="arrow" />
        </motion.div>
      </header>
      {isOpen && (
        <motion.div
          className={styles.content}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default Accordion;
