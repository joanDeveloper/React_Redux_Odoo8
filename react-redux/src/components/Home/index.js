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
import AlertDialogSlide from '../Dialog';
import IntegrationDownshift from '../React-material-ui/Autocomplete';

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
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    console.log("token home",this.props)
    const tab = this.props.token ? 'all' : 'feed';
    const devicesPromise = this.props.token ?
      agent.Devices.all :
      agent.Devices.feed;
    //console.log("devicesPromise", devicesPromise);
    this.props.onLoad(tab, devicesPromise, Promise.all([devicesPromise(), agent.Categories.all()]));
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    console.log("HOME____",this.props)
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
            <IntegrationDownshift token={this.props.token}/>
            <AlertDialogSlide/>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
