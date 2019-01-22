import Banner from './Banner';
import Footer from './Footer';
import MainView from './MainView';
import React from 'react';
//import Tags from './Tags';
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
  /*onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),*/
  onLoad: (tab, pager, payload) =>{
    console.log("tab",tab,"pager",pager,"payload",payload);
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload })},
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Home extends React.Component {
  componentWillMount() {
    const tab = this.props.token ? 'feed' : 'all';
    /*const articlesPromise = this.props.token ?
      agent.Articles.feed :
      agent.Articles.all;*/
      /*agent.Devices.feed().then(a=>{
        console.log("HOMEEEE",a);
      })*/
      /*agent.Devices.all().then(a=>{
        console.log("HOMEEEEAll",a);
      }).catch(e=>{
        console.log("ERRR",e);
      })*/
    const devicesPromise = this.props.token ?
      agent.Devices.feed :
      agent.Devices.all;
    //this.props.onLoad(tab, articlesPromise, Promise.all([agent.Tags.getAll(), articlesPromise()]));
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
        <Footer appName={this.props.appName}/>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
