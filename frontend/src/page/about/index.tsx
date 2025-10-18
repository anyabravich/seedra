import BannerHero from "@/components/BannerHero";
import styles from "./page.module.scss";
import Help from "@/components/Help";
import Story from "@/components/Story";
import Team from "@/components/Team";
import Container from "@/components/Container";

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <Container>
        <BannerHero
          className={styles.bannerHero}
          title="Who we are and what we do"
          text="Here you can find a lot of interesting and useful information that you need in gardening and creating a beautiful garden"
        />
      </Container>

      <Help className={styles.help} />

      <Story />

      <Team />
    </div>
  );
};

export default AboutPage;
