import DeviceList from '../DeviceList';
import CategoriesList from '../CategoriesList';
import React from 'react';
import { connect } from 'react-redux';
import IntegrationDownshift from '../React-material-ui/Autocomplete';
import Offers from '../Offers';

const mapStateToProps = state => ({
  ...state.deviceList
});

const MainView = props => {
  return (
    <span>
      <IntegrationDownshift token={props.token} />
      <section className="container-categories">
        <CategoriesList
          categories={props.categories}
          token={props.token} />
      </section>
      <section className="container-device">
        <DeviceList
          pager={props.pager}
          devices={props.devices}
          loading={props.loading}
          devicesCount={props.devicesCount}
          currentPage={props.currentPage} />
      </section>
      <Offers device={props.devices} token={props.token}/>
    </span>
  );
};

export default connect(mapStateToProps)(MainView);
