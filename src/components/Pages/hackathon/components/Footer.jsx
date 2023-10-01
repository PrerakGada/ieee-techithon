import React from 'react'
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <>
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
                <div className={styles.heading}>Reach Us</div>
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
            <div className={styles.footer}>
                <div className={styles.footerheading}>
                    Atharva College of Engineering
                </div>
                <div className={styles.footercontent}>
                    Address :  Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop Naka, Malad West, Mumbai, Maharashtra 400095
                </div>
            </div>
        </>
    )
}

export default Footer