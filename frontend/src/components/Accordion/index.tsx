"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
import Icons from "../Icons";

interface IAccordion {
  title: string;
  children: React.ReactNode;
}

const Accordion = ({ title, children }: IAccordion) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["accordion"]}>
      <header
        className={styles["accordion__header"]}
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className={`${styles["accordion__title"]} medium-16`}>{title}</p>
        <motion.div
          className={styles["accordion__arrow"]}
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
          className={styles["accordion__content"]}
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
