import React from 'react';
import homeStyle from './homeStyle';

const Footer = ({ appName }) => {
  return (
    <div style={homeStyle.footer}>
        <h1>{appName}</h1>
        <p>FOOTER</p>
    </div>
  );
};

export default Footer;
