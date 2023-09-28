import React from "react";
import styles from "./styles/hackathon.module.css";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import FAQs from "./components/Faqs";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

const Hackathon = () => {
  return (
    <main className={styles.container}>
      <Hero />
      <Prizes />
      <Timeline />
      <FAQs />
      <Footer />
    </main>
  );
};

export default Hackathon;
