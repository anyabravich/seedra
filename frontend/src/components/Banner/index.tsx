import styles from "./page.module.scss";
import Container from "../Container";

const Banner = () => {
  return (
    <article className={`${styles.banner}`}>
      <Container className={styles.container}>
        <p className={`${styles.title} h3`}>We sell seeds</p>
        <p className={`${styles.description} medium-16`}>
          that always sprout and gardening supplies which never break
        </p>
      </Container>
    </article>
  );
};

export default Banner;
