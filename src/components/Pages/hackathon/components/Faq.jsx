import React from "react";
import "../styles/faq.css";

const Faq = ({ faq, index, toggleFAQ }) => {
  return (
    <container
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-content">
        <div className="faq-number">{index + 1 + "."}</div>
        <div className="faq-question">{faq.question}</div>
      </div>
      <div className="faq-arrow"></div>
      <div className="faq-answer">{faq.answer}</div>
    </container>
  );
};

export default Faq;
