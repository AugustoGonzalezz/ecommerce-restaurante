import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Íconos de redes sociales

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="/terms" className={styles.link}>Términos y Condiciones</a>
        <a href="/privacy" className={styles.link}>Política de Privacidad</a>
        <a href="/contact" className={styles.link}>Contacto</a>
      </div>
      <div className={styles.socials}>
        <a href="https://facebook.com" className={styles.socialIcon}>
          <FaFacebook />
        </a>
        <a href="https://instagram.com" className={styles.socialIcon}>
          <FaInstagram />
        </a>
        <a href="https://twitter.com" className={styles.socialIcon}>
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
