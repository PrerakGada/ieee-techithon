import React from "react";
import "./hackathon.module.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Prizes from "./components/Prizes";
import FAQs from "./components/Faqs";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";

const Hackathon = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Prizes />
      <Timeline />
      <FAQs />
      <Footer />
    </main>
  );
};

export default Hackathon;
