import Image from "next/image";
import Container from "../Container";
import styles from "./page.module.scss";
import { TeamProps } from "./types";
import { teamData } from "./data";

const Team = ({ className }: TeamProps) => {
  return (
    <section className={`${styles.team} ${className || ""}`}>
      <Container>
        <h2 className={`${styles.title} h2`}>Meet our team</h2>
        <div className={styles.grid}>
          {teamData.map(member => (
            <div key={member.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  className={`${styles.image} image-cover`}
                  src={member.image}
                  alt={member.name}
                  width={280}
                  height={280}
                  priority={true}
                />
              </div>
              <h3 className={`${styles.name} h2-mobile`}>{member.name}</h3>
              <p className={`${styles.position} light-16`}>{member.position}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Team;
