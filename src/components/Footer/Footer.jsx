import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import styles from './Footer.css';
// import React from 'react';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socialMedia}>
        <LinkedIn />
        <GitHub />
        <Email />
      </div>
      <p> &copy; 2022 Made By Pedro Chavez Nolasco</p>
    </div>
  );
}

export default Footer;
