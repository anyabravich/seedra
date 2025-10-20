import { FC } from "react";

import Button from "../Button";
import BlogList from "../BlogList";
import Container from "../Container";
import { blogData as data } from "../../mock/blogData";
import styles from "./page.module.scss";

const Blog: FC = () => {
  return (
    <section className={styles.blog}>
      <Container className={styles.container}>
        <header className={styles.header}>
          <h2 className={`${styles.title} h2`}>Our blog.</h2>
          <Button className={`${styles.button}`} variant="border">
            Go to our blog
          </Button>
        </header>
        <BlogList data={data} className={`${styles.cards} slider`} limit={6} />
      </Container>
    </section>
  );
};

export default Blog;
