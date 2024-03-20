import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm KundanGowda</h1>
        <p className={styles.description}>
        An aspiring Software Engineer eager to dive deep into the world of technology. My journey in this field is driven by an insatiable curiosity and a passion for software development.
        </p>
        <a href="mailto:kundangowda.n@gmail.com" className={styles.contactBtn}>
          Hire Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
