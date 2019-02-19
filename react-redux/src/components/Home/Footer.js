import React from 'react';
//import homeStyle from './homeStyle';

const Footer = ({ appName }) => {
  return (
    <footer>
      <h3 className="footer-sections">{appName}</h3>
      <span>Mis redes sociales:</span>
      <section id="social" className="delete-style">
        <li class="zocial-twitter footer-socialogin"></li>
        <li class="zocial-facebook footer-socialogin"></li>
        <li class="zocial-instagram footer-socialogin"></li>
      </section>

    </footer>
  );
};

export default Footer;
