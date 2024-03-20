import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/bc668ec7-a0fb-4057-8865-f5e13af8aef7.jpg")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
              N.M.A.M Institute of Technology, Udupi, Karnataka</p>
<p>Bachelor of Engineering in Electronics and Communication</p>
<p>Graduation - June 2023</p>
<p>Relevant Coursework: Object-oriented programming in Java, Python programming, Data Base Management System, Embedded
Linux, and Software Engineering Practices
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Versatile</h3>
              <p>
              I thrive on the dynamic nature of software development and am excited about exploring various facets of it, 
              including front-end, back-end, data engineering, cloud computing, linux and networks. Whether it's crafting intuitive user interfaces, architecting scalable backend systems, 
              analyzing data to derive meaningful insights, or deploying applications on the cloud, I'm enthusiastic about learning and mastering any aspect of software technology.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Tip</h3>
              <p>
              My view on interviews is that they should be discussions rather than vivas
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
