import React from "react";
import styles from "../styles/sponsors.module.css";

const Sponsors = () => {
  return (
    <div className={styles.section}>
      <div className={styles.justify}>
      <img src="/hackmania/line.svg" alt="line" />
        <div className={styles.heading}>Hackathon Sponsors</div>
        <img src="/hackmania/line.svg" alt="line" />
      </div>
      <div className={styles.grid}>
        <div className={styles.sponser}>
          <figure className={styles.backgroundTile}>
            <span className={styles.tileBlur}></span>
          </figure>
          <div className={styles.card}>
            <figure>
              <a href="https://devfolio.co/" 
              target="_blank"
              >
              <img
                title="Devfolio"
                className={styles.cardImage}
                src="/hackmania/devfolio.png"
                alt="Devfolio Logo"
              />
              </a>
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
            <a href="https://polygon.technology/"
                target="_blank" 
              >
              <img
                title="Polygon"
                className={styles.cardImage}
                src="/hackmania/polygon-logo.jpg"
                alt="Polygon Logo"
              />
              </a>
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
              <a href="https://replit.com/"
                target="_blank" 
              >
              <img
                title="Replit"
                className={styles.cardImage}
                src="/hackmania/replit.png"
                alt="Empty Logo"
              />
              </a>
            </figure>
            <div className={styles.cardFooter}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
