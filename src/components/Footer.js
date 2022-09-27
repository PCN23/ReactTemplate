import { GitHub, LinkedIn, Email } from '@mui/icons-material';
import '../styles/Footer.css';
// import React from 'react';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedIn />
        <GitHub />
        <Email />
      </div>
      <p> &copy; 2022 Made By Pedro Chavez Nolasco</p>
    </div>
  );
}

export default Footer;
