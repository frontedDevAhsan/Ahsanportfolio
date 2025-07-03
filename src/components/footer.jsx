import React from 'react';
import footerImg from '../assets/img/footer.png'; // <-- apna image path yahan set karein

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', backgroundColor: '#000' }}>
      <img
        src={footerImg}
        alt="Footer"
        style={{ maxWidth: '100%', width: '100%' }}
      />
    </footer>
  );
};

export default Footer;
