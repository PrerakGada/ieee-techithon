import React from "react";
import styles from "../styles/domains.module.css";

const Domains = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h2 id="domains">Domains</h2>
        <div className={styles.grid}>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/web.png"
                  alt="Web and App Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ WEB/APP ]</h3>
          </article>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/arvr.png"
                  alt="AR and VR Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ AR/VR ]</h3>
          </article>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/blockchain.png"
                  alt="Blockchain Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ BLOCKCHAIN ]</h3>
          </article>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/social.png"
                  alt="Social Cause Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ Social Cause ]</h3>
          </article>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/ai.png"
                  alt="AI and ML Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ AI/ML ]</h3>
          </article>
          <article className={styles.card}>
            <div className={styles.justify}>
              <span className={styles.bracket}>[</span>
              <figure>
                <img
                  className={styles.domainImage}
                  src="/hackmania/iot.png"
                  alt="Internet of Things Domain"
                />
              </figure>
              <span className={styles.bracket}>]</span>
            </div>
            <h3 className={styles.domain}>[ IoT ]</h3>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Domains;
