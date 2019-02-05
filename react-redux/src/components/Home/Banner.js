import React from 'react';
import  "../../styles.css";

const Banner = ({ appName }) => {
  return (
    <div className="banners" align="center">
        <h1 className="logo-font">{appName}</h1>
        <p>Su lugar tecnológico</p>
    </div>
  );
};

export default Banner;
