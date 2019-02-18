import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  HOME_OFFERS
} from '../../constants/actionTypes';
import AlertDialogSlide from '../Dialog';
import DemoCarousel from '../Carousel';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) => {
    console.log("tab", tab, "pager", pager, "payload", payload);
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })
  },
  loadOffers: (payload) =>
    dispatch({ type: HOME_OFFERS, payload })
  ,
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    console.log("token home", this.props)
    const tab = this.props.token ? 'all' : 'feed';
    const devicesPromise = this.props.token ?
      agent.Devices.all :
      agent.Devices.feed;
    this.props.onLoad(tab, devicesPromise, Promise.all([devicesPromise(), agent.Categories.all(), agent.Devices.offers()]));

  }

  componentWillUnmount() {
    this.props.onUnload();
  }
  //<Banner appName={this.props.appName} /> <AlertDialogSlide />
  render() {
    return (
      <section className="home-page">
        <DemoCarousel />
        <MainView token={this.props.token} />
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
