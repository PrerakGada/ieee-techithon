import React from "react";
import styles from "../styles/timeline.module.css";

const Timeline = () => {
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
        <div className={styles.heading}>Timeline</div>
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
    </div>
  );
};

export default Timeline;
