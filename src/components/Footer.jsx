import React from 'react';
import styles from '../styles/footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.container}> {/* Asegúrate de que aquí se aplica la clase container */}
      <p>Simona</p>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.twitter.com" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" rel='noopener noreferrer' target='_blank'>
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <p>Comisión 60050</p>
    </footer>
  );
}

export default Footer;
