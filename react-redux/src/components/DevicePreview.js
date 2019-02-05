import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DevicePreview = props => {
  console.log("DEVICEPREVIEW", props);
  const device = props.device;

  return (
    <div className="device-preview">
      <Link to={`/device/${device.slug}`} className="preview-link">
        <img src={`../../media/devices/${device.media}.png`} alt={device.media} style={{ width: 150, height: 150 }} />
        <p><strong>{device.brand}</strong></p>
        <p>price: {device.price} €</p>
      </Link>
    </div>
  );
}

export default connect(() => ({}))(DevicePreview);
