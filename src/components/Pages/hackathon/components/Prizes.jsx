import React from "react";
import styles from "../styles/prizes.module.css";

const Prizes = () => {
  return (
    <div className={styles.container}>
      <article className={styles.card}>
        <div className={styles.spreadLineLeft}></div>
        <h2 id="prizes">Prizes</h2>
        <div className={styles.justify}>
          <figure className={styles.rows}>
            <img
              className={styles.blowImage}
              src="/hackmania/blow.png"
              alt="Prize Celebration"
            />
            <img
              className={styles.trophyImage}
              src="/hackmania/trophy.png"
              alt="Prize Trophy"
            />
          </figure>
          <h1 className={styles.prizeAmount}>1 Lakh + worth prizes</h1>
        </div>
        <div className={styles.spreadLineRight}></div>
      </article>
    </div>
  );
};

export default Prizes;
