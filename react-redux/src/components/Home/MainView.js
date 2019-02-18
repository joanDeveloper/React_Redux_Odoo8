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
      <section>
        <aside className="container-home">
          <img src="../../media/home/dis1.svg" width="150" height="150" />
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            </p>
        </aside>

        <aside className="container-home">
          <img src="../../media/home/dis2.svg" width="150" height="150" />
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            </p>
        </aside>
      </section>
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
      <Offers device={props.devices} token={props.token} />
    </span>
  );
};

export default connect(mapStateToProps)(MainView);
