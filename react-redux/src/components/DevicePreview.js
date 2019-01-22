import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const DevicePreview = props => {
  console.log("DEVICEPREVIEW", props);
  const device = props.device;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to={`/device/${device.slug}`} className="preview-link">
          <p><strong>{device.brand}</strong></p>
          <p>model: {device.model}</p>
          <p>price: {device.price} €</p>
        </Link>
      </div>
    </div>
  );
}

export default connect(() => ({}))(DevicePreview);
