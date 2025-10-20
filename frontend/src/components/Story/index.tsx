import { FC } from "react";
import Image from "next/image";

import Container from "../Container";
import styles from "./page.module.scss";

const Story: FC = () => {
  return (
    <section className={styles.story}>
      <Container className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            className={`${styles.image} image-cover`}
            src="/our-story.jpg"
            alt="Our story"
            width={540}
            height={540}
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <h2 className={`${styles.title} h2`}>Our story</h2>
          <div className={`${styles.text} light-16`}>
            <p>
              SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
              professional instructions created by PhD Helga George
            </p>
            <p>
              Be sure of our quality - the freshest batches of this season.
              Non-GMO, Heirloom - our seeds were tested and have the best
              germination ratings.
            </p>
            <p>Your easy growing experience is our guarantee</p>
            <p>
              Spinach commom culinary uses: salads, soups, smoothies, lasagne,
              pizza, pies, risotto, and more
            </p>
            <p>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Story;
