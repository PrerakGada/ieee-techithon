import React from "react";
import styles from "../styles/hero.module.css";

const Hero = () => {
  return (
    <section>
      <img
        className={styles.img}
        src="/hackmania/hero-image.png"
        alt="Hero Section Background"
      />
    </section>
  );
};

export default Hero;
