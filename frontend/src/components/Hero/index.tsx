import styles from "./page.module.scss";
import Container from "../Container";
import Image from "next/image";
import Button from "../Button";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.hero__container}>
        <div className={styles.hero__inner}>
          <div className={styles.hero__content}>
            <h1 className={`${styles.hero__title} h1`}>
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h1>
            <p
              className={`${styles.hero__description} light-16`}
              dangerouslySetInnerHTML={{
                __html:
                  "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee",
              }}
            ></p>
            <div className={`${styles.hero__prices} ${styles.prices}`}>
              <div className={styles.prices__item}>
                <Image
                  className={styles.prices__fire}
                  src="/fire.svg"
                  alt="fire"
                  width={46}
                  height={46}
                />
                <span className={styles.prices__new}>$12.56</span>
              </div>
              <span className={styles.prices__old}>$15.56</span>
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
