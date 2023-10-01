import React from "react";
import styles from "../styles/faqs.module.css";
import { useState } from "react";
import Faq from "./Faq";

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What would be the mode of the hackathon?",
      answer:
        "CodeShastra 9.0 will be conducted in an ______ format. The event will be hosted ________ at Atharv College of Engineering in Malad West, Mumbai, India, with an online presence on Discord.",
      open: true,
    },
    {
      question: "What if I have never been in a hackathon before?",
      answer:
        "Hackmania aims to give beginners a headstart by providing them mentors who are from the industry to guide them. So that they can learn while brainstorming ideas. We've called for mentors👨🏻‍🏫 from Industry to help you and also judge your projects . So, first timers don't have to worry as their lack of experience won't be an issue in their road to victory . Plus, there is always a first time for everything ! We promise you a fun and fruitful experience.",
      open: false,
    },
    {
      question: "What technology can I use?",
      answer:
        "Participants can use any technologies as long as its open source. Intellectual Property (IP) of the idea belongs to the team members and their college/institution. The organizers, sponsors, and any other parties are not liable for any disputes that may arise out of the same.",
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
  );
};

export default FAQs;
