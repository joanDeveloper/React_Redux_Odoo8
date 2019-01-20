import React from 'react';
import { Link } from 'react-router-dom';
//import agent from '../agent';
import { connect } from 'react-redux';
//import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

/*const FAVORITED_CLASS = 'btn btn-sm btn-primary';
const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});*/

const DevicePreview = props => {
  console.log("DEVICEPREVIEW", props);
  const device = props.device;

  return (
    <div className="article-preview">
      <div className="article-meta">
        <h1>{device.brand}</h1>
        <Link to={`/device/${device.slug}`} className="preview-link">
          <h1>{device.brand}</h1>
          <p>model: {device.model}</p>
          <p>{device.description}</p>
          <p>price: {device.price}</p>
          <span>Read more...</span>
        </Link>
      </div>
    </div>
  );
}

export default connect(() => ({}))(DevicePreview);
