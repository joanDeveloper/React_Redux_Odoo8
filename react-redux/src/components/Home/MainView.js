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
    <section>
      <IntegrationDownshift token={props.token} />
      <section>
        <h1 align="center" className="title-principal">Nuestros servicios</h1>
        <section className="container-home">
          <img src="../../media/home/dis1.svg" width="150" height="150" alt=""/>
          <p className="content-home">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            </p>
        </section>

        <section className="container-home">
          <img src="../../media/home/dis2.svg" width="150" height="150" alt=""/>
          <p className="content-home">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            </p>
        </section>
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
    </section>
  );
};

export default connect(mapStateToProps)(MainView);
