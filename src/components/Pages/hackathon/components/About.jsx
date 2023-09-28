import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.container}>
      <article className={styles.card}>
        <div className={styles.spreadLine}></div>
        <h2 id="about">About</h2>
        <p>
          Presenting ACE IEEE Techithon's Hack Mania, one of the biggest 24-Hour
          Offline Hackathon of ACE. With this event, we plan to provide a
          platform for students from all over Mumbai where they can learn
          invaluable skills about product development by building projects from
          scratch and competing with fellow students.
          <span className={styles.highlight}>
            {" "}
            *Our aim is to develop applications, websites and solutions that
            would be of utility for the society.*{" "}
          </span>
        </p>
      </article>
    </section>
  );
};

export default About;
