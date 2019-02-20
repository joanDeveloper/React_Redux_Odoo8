import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DevicePreview = props => {
  console.log("DEVICEPREVIEW", props);
  const device = props.device;

  return (
    <section className={props.class} key={device.slug}>
      <Link to={`/device/${device.slug}`} className="preview-link" tabIndex="0">
        <img src={`../../media/devices/${device.media}.png`} alt={`producto ${device.media}`} className="media-item"/>
        <div className="delete-style device-list__color">
          <li><strong>{device.brand}</strong></li>
          <li className="device-list__price">price: {device.price} €</li>
        </div>
        
      </Link>
    </section>
  );
}

export default connect(() => ({}))(DevicePreview);
