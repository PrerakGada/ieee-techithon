import styles from "../styles/hero.module.css";
import React from "react";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);


  return (
    <section className={styles.container}>
      {/* <img
        className={styles.background}
        src="/hackmania/hero-image.jpg"
        alt="Hero Section Background"
      /> */}
      <header className={styles.header}>
        <figure>
          <img
            className={styles.logo}
            src="/hackmania/ieee.png"
            alt="IEEE Logo"
          />
        </figure>
        <figure>
          <img
            className={styles.logoTwo}
            src="/hackmania/gdsc.png"
            alt="GDSC Logo"
          />
        </figure>
      </header>
      <main className={styles.main}>
        <figure>
          <img
            className={styles.logo}
            src="/hackmania/edition.png"
            alt="IEEE Edition"
          />
        </figure>
        <section>
          <figure>
            <img
              className={styles.title}
              src="/hackmania/title.png"
              alt="Title For Hackathon"
            />
          </figure>
          <div className={styles.justify}>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M21.0314 0.82119L15.0646 21.0439L0.534687 5.76511L21.0314 0.82119Z"
                  fill="#FF8900"
                  fillOpacity="0.866667"
                />
              </svg>
            </figure>
            <p className={styles.dialogue}>
              Presenting ACE IEEE Techithon's Hack Mania, one of the biggest
              <span className={styles.highlight}>
                {" "}
                24-Hour Offline Hackathon
              </span>{" "}
              of ACE
            </p>
          </div>
          <div className={styles.center}>
            <img
              className={styles.arrow}
              src="/hackmania/arrow.png"
              alt="Arrow Graphic"
            />
            <div className={styles.rows}>
              <div className={styles.dateContainer}>
                <img
                  className={styles.polygon}
                  src="/hackmania/polygon.png"
                  alt="Date Background Polygon"
                />
                {/* <figcaption className={styles.dateAbsoluteText}>6</figcaption> */}
              </div>
              <h2 className={styles.dateText}>October 2023</h2>
            </div>
            {/* <container id="apply-button-container">
            <div
              class="apply-button"
              data-hackathon-slug="hackmania"
              data-button-theme="light"
              style={{ height: '44px', width: '312px' }}
            ></div>
            </container> */}

            <a
              href="https://hackmania.devfolio.co/"
              target="_blank"
              >
              <img
                className={styles.applyButton}
                src="/hackmania/applywithdevfolio.png">
              </img>
            </a>

          </div>
        </section>
      </main>
      {/* <footer className={styles.footer}>
        <a href="#about">About</a>
        <div className={styles.spreadLine}></div>
        <a href="#domains">Domains</a>
        <div className={styles.spreadLine}></div>
        <a href="#prizes">Prizes</a>
        <div className={styles.spreadLine}></div>
        <a href="#sponsors">Sponsors</a>
      </footer> */}
    </section>
  );
};

export default Hero;
