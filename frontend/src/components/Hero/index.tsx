import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";

interface IHero {
  caption: string;
  description: string;
  priceActual: number;
  priceOld: number;
}

const Hero = ({ caption, description, priceActual, priceOld }: IHero) => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <div className={styles.hero__inner}>
          <div className={styles.hero__content}>
            <h1 className={`${styles.hero__title} h1`}>{caption}</h1>
            <p
              className={`${styles.hero__description} light-16`}
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            <div className={`${styles.hero__prices} ${styles.prices}`}>
              <div className={styles.prices__item}>
                <img
                  className={styles.prices__fire}
                  src="/fire.svg"
                  alt="fire"
                />
                <span className={styles.prices__new}>${priceActual}</span>
              </div>
              {priceOld && (
                <span className={styles.prices__old}>${priceOld}</span>
              )}
            </div>
            <div className={styles.hero__buttons}>
              <Button variant="primary">Add to card</Button>
              <Button variant="secondary">Discover</Button>
            </div>
          </div>
          <div className={styles.hero__picture}>
            <Image
              className={styles.hero__image}
              src="/hero.png"
              alt="hero"
              priority={true}
              width={310}
              height={347}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
