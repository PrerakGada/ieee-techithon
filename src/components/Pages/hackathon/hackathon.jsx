import React from "react";
import styles from "./styles/hackathon.module.css";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import FAQs from "./components/Faqs";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Domains from "./components/Domains";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

const Hackathon = () => {
  return (
    <main className={styles.container}>
      <figure className={styles.gradientbg}>
        <Hero />
      </figure>
      <figure className={styles.mainbg}>
        <About />
        <Domains />
        <Prizes />
        <Timeline />
        <FAQs />
        <Sponsors />
        <Footer />
      </figure>
    </main>
  );
};

export default Hackathon;
