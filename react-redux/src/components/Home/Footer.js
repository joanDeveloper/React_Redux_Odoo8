import React from 'react';
//import homeStyle from './homeStyle';

const Footer = ({ appName }) => {
  return (
    <footer>
      <h3 className="footer-sections">{appName}</h3>
      <span>Mis redes sociales:</span>
      <section id="social" className="delete-style">
        <li className="zocial-twitter footer-socialogin" tabIndex="0"></li>
        <li className="zocial-facebook footer-socialogin" tabIndex="0"></li>
        <li className="zocial-instagram footer-socialogin" tabIndex="0"></li>
      </section>

    </footer>
  );
};

export default Footer;
