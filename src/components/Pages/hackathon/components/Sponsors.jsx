import React from "react";
import styles from "../styles/sponsors.module.css";

const Sponsors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.justify}>
        <svg
          className={styles.linesvg}
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="6"
          viewBox="0 0 93 6"
          fill="none"
        >
          <path d="M-0.0107756 3L92.127 3" stroke="#FFF85A" strokeWidth="5" />
        </svg>
        <div className={styles.heading}>Hackathon Sponsors</div>
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
      <div className={styles.grid}>
        <div className={styles.sponser}>
          <figure className={styles.backgroundTile}>
            <span className={styles.tileBlur}></span>
          </figure>
          <div className={styles.card}>
            <figure>
              <img
                className={styles.cardImage}
                src="/hackmania/devfolio.png"
                alt="Devfolio Logo"
              />
            </figure>
            <div className={styles.cardFooter}></div>
          </div>
        </div>
        <div className={styles.sponser}>
          <figure className={styles.backgroundTile}>
            <span className={styles.tileBlur}></span>
          </figure>
          <div className={styles.card}>
            <figure>
              <img
                className={styles.cardImage}
                src="/hackmania/polygon-logo.jpg"
                alt="Polygon Logo"
              />
            </figure>
            <div className={styles.cardFooter}></div>
          </div>
        </div>
        <div className={styles.sponser}>
          <figure className={styles.backgroundTile}>
            <span className={styles.tileBlur}></span>
          </figure>
          <div className={styles.card}>
            <figure>
              <img
                className={styles.cardImage}
                src="/hackmania/ieee.png"
                alt="Empty Logo"
              />
            </figure>
            <div className={styles.cardFooter}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
