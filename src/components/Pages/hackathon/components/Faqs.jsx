import React from "react";
import styles from "../styles/faqs.module.css";
import styles2 from "../styles/faq.css";
import { useState } from "react";
import Faq from "./Faq";


const FAQs = () => {

  const [faqs, setFaqs] = useState([
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: true
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: false
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
    <div className={styles.section}>
      <div className={styles.justify}>
       <svg className={styles.linesvg} xmlns="http://www.w3.org/2000/svg" width="93" height="6" viewBox="0 0 93 6" fill="none">
        <path d="M-0.0107756 3L92.127 3" stroke="#FFF85A" stroke-width="5" />
      </svg>

      <p className={styles.heading}>FAQ's</p>
      </div>
{/*
      <div className={styles.cells}>

        <div className={styles.cell}>
          <p className={styles.number}>1.</p>
          <p className={styles.question}>Presenting ACE IEEE Techithon's Hack Mania, one of the biggest 24-Hour Offline Hackathon of ACE. With t</p>
          <img className={styles.downarrow} ></img>
        </div>

        

        
      </div>
    </div> */}
    
    <div className={"faqs"}>
        {faqs.map((faq, index) => (
          <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
    </>
  );
};

export default FAQs;
