import Image from "next/image";
import Container from "../Container";
import styles from "./page.module.scss";
import { HelpProps } from "./types";
import cn from "classnames";

const Help = ({ className }: HelpProps) => {
  return (
    <section className={cn(styles.help, className)}>
      <Container className={styles.container}>
        <div>
          <h2 className={`${styles.title} h2`}>
            Seedra helps to grow fast and efficiant
          </h2>
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
            <p>
              Your easy growing experience is our guarantee Spinach commom
              culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
              risotto, and more
            </p>
            <p>
              Proudly sourced in the USA - our garden seeds are grown,
              harvested, and packaged in the USA. We support local farmers and
              are happy to produce this American-made product
            </p>
          </div>
        </div>
        <div className={styles.imageDecor}>
          <Image
            className={styles.image}
            src="/help-img.png"
            alt="decor"
            fill
            priority={true}
          />
        </div>
      </Container>
    </section>
  );
};

export default Help;
