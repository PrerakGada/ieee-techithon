import React from "react";
import styles from "./styles/hackathon.module.css";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import FAQs from "./components/Faqs";
import Timeline from "./components/Timeline";
import About from "./components/About";
import Domains from "./components/Domains";
import Sponsers from "./components/Sponsers";
import styled from "./hehe.css";

const Hackathon = () => {
  return (
    <main className={styles.container}>
      <div className="hehe">

      <Hero />
      </div>
      <div className="bg-imghehe">  
      <About />
      <Domains />
      <Prizes />
      <Timeline />
      <FAQs />
      <Sponsers />
      </div>
    </main>
  );
};

export default Hackathon;
