import React from 'react';
import styles from '../styles/footer.module.css';

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
            <div className={styles.footerContainer}>
                <div className={styles.leftFooter}>

                    <div className={styles.footerContent}>
                        <div className={styles.footerheading}>Atharva College of Engineering</div>
                        <p>
                            <a>Address:</a> Malad Marve Road, Shri Sevantilal Khandwala Marg, Charkop
                            Naka, Malad West, Mumbai, Maharashtra 400095
                        </p>
                        <p>
                            <a>Email Us :</a> prerakgada07@gmail.com
                        </p>
                        <p>
                            <a>Contact Us :</a> +91 9664078880 / +91 7900122449
                        </p>
                        <a href="https://www.instagram.com/ieeetechithon">
                        <img style={{margin:7}} src="/hackmania/instagram.png" alt="Instagram"  />
                        </a>
                        
                        <a href="https://www.instagram.com/gdsc_ace">
                        <img style={{margin:7}} src="/hackmania/instagram.png" alt="Instagram"  />
                        </a>
                        <p>
                        © 2023 IEEE Techithon. All rights reserved.
                        </p>
                    </div>

                </div>
                <div className={styles.rightFooter}>
                    {/* Add your map component or content here */}
                    <div className={styles.map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.942130860132!2d72.82467711103591!3d19.19772974806442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c24db49add%3A0x973ee0458244da44!2sAtharva%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1696181696449!5m2!1sen!2sin" width="440" height="440" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
