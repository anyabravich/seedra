import { FC } from "react";
import Image from "next/image";

import Button from "../Button";
import Container from "../Container";
import styles from "./page.module.scss";

const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.content}>
            <h1 className={`${styles.title} h1`}>
              SEEDRA Basil Seeds for Indoor and Outdoor Planting
            </h1>
            <p
              className={`${styles.description} light-16`}
              dangerouslySetInnerHTML={{
                __html:
                  "Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee",
              }}
            ></p>
            <div className={`${styles.prices} ${styles.pricesBlock}`}>
              <div className={styles.pricesItem}>
                <Image
                  className={styles.pricesFire}
                  src="/fire.svg"
                  alt="fire"
                  width={46}
                  height={46}
                />
                <span className={styles.pricesNew}>$12.56</span>
              </div>
              <span className={styles.pricesOld}>$15.56</span>
            </div>
            <div className={styles.buttons}>
              <Button variant="primary">Add to card</Button>
              <Button variant="secondary">Discover</Button>
            </div>
          </div>
          <div className={styles.picture}>
            <Image
              className={styles.image}
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
