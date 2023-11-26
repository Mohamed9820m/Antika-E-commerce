'use client'
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-container"]}>
        <div className={styles["logo-section"]}>
          <span className={styles["logo-text"]}>Antika</span>
        </div>
        <div className={styles["website-info-section"]}>
          <h4 className={styles["section-title"]}>Website Information</h4>
          <p>Address: 123 Main Street, City, State, ZIP</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className={styles["contact-section"]}>
          <h4 className={styles["section-title"]}>Contact Us</h4>
          <p>
            <a href="/about" className={styles.link}>About Us</a>
          </p>
          <p>
            <a href="/contact" className={styles.link}>Contact Us</a>
          </p>
          <div className={styles["social-media"]}>
            <FaFacebook className={`${styles["social-icon"]} ${styles["facebook-icon"]}`} />
            <BsInstagram className={`${styles["social-icon"]} ${styles["instagram-icon"]}`} />
            <AiOutlineYoutube className={`${styles["social-icon"]} ${styles["youtube-icon"]}`} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
