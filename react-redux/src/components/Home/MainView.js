import DeviceList from '../DeviceList';
import CategoriesList from '../CategoriesList';
import React from 'react';
import { connect } from 'react-redux';
import IntegrationDownshift from '../React-material-ui/Autocomplete';

const mapStateToProps = state => ({
  ...state.deviceList
});

const MainView = props => {
  console.log("PROPS MAIN", props);
  return (
    <div className="col-md-9">
      <IntegrationDownshift token={props.token}/>
      <CategoriesList 
        categories={props.categories} 
        token={props.token}/>
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
