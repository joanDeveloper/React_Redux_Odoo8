import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>{
    console.log("tab",tab,"pager",pager,"payload",payload);
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })},
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    agent.Devices.test(1).then(g=>{
      console.log("TESTING",g);
    });
    const tab = this.props.token ? 'feed' : 'all';
    const devicesPromise = this.props.token ?
      agent.Devices.feed :
      agent.Devices.all;

    this.props.onLoad(tab, devicesPromise, Promise.all([devicesPromise(),agent.Categories.all()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <Banner token={this.props.token} appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
