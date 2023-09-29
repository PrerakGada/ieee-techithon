import React from "react";
import styles from "../styles/faqs.module.css";
import { useState } from "react";
import Faq from "./Faq";

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: true,
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: false,
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra lorem eu dolor rhoncus, at scelerisque ligula gravida.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
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
          <svg
            className={styles.linesvg}
            xmlns="http://www.w3.org/2000/svg"
            width="93"
            height="6"
            viewBox="0 0 93 6"
            fill="none"
          >
            <path d="M-0.0107756 3L92.127 3" stroke="#FFF85A" strokeWidth="5" />
          </svg>
          <div className={styles.heading}>FAQ's</div>
          <svg
            className={styles.linesvg}
            xmlns="http://www.w3.org/2000/svg"
            width="93"
            height="6"
            viewBox="0 0 93 6"
            fill="none"
          >
            <path d="M-0.0107756 3L92.127 3" stroke="#FFF85A" strokeWidth="5" />
          </svg>
        </div>

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
