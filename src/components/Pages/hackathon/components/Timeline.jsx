import React from "react";
import styles from "../styles/timeline.module.css";

const Timeline = () => {
  return (
    <div className={styles.section}>
      <div className={styles.justify}>
      <img src="/hackmania/line.svg" alt="line" />
        <div className={styles.heading}>Timeline</div>
        <img src="/hackmania/line.svg" alt="line" />
      </div>
    </div>
  );
};

export default Timeline;
