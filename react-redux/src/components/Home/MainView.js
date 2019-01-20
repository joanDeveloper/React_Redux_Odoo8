import DeviceList from '../DeviceList';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  /*...state.articleList,
  tags: state.home.tags,
  token: state.common.token*/
  ...state.deviceList
});

const MainView = props => {
  console.log("PROPS MAIN",props);
  return (
    <div className="col-md-9">
      <DeviceList
        pager={props.pager}
        devices={props.devices}
        loading={props.loading}
        devicesCount={props.devicesCount}
        currentPage={props.currentPage} />
    </div>
  );
};

export default connect(mapStateToProps)(MainView);
