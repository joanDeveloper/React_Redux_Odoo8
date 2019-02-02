import React from 'react';
import homeStyle from './homeStyle';

const Banner = ({ appName }) => {
  return (
    <div style={homeStyle.banner} align="center">
        <h1 className="logo-font">{appName}</h1>
        <p>Su lugar tecnológico</p>
    </div>
  );
};

export default Banner;
