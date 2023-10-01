import React from "react";
import styles from "../styles/faqs.module.css";
import { useState } from "react";
import Faq from "./Faq";

const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What would be the mode of the hackathon?",
      answer:
        "Hackmania will be conducted in an hybrid format. The event will be hosted both at Atharva College of Engineering in Malad West, Mumbai, and online on Discord.",
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
    {
      question: "Will my team be alloted a mentor?",
      answer:
        "Yes, there would be a help desk to ask the mentors. A mentor would be reaching your room in sometime.",
      open: false,
    },
    {
      question: "What is the selection criteria?",
      answer:
        "The selection criteria is based on the idea, implementation, and presentation. The judges will be evaluating the projects based on the same.",
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
        <img src="/hackmania/line.svg" alt="line" />
        <div className={styles.heading}>FAQ's</div>
        <img src="/hackmania/line.svg" alt="line" />
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
