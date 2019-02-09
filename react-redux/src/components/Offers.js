import React from 'react';
import DevicePreview from './DevicePreview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.deviceList
  });

class Offers extends React.Component {
    render() {
        if (!this.props.offers) return null;
        return (
            <span>
                <h3 align="center">Nuestras ofertas</h3>
                {
                    this.props.offers.filter(item => item.oferta != false).map(prod => {
                        return (
                            <section className="container-device">
                                <DevicePreview device={prod} key={prod.slug} class="device-preview-offers"/>
                            </section>
                        )
                    })

                }
            </span>
        );
    }
}

//export default Offers;
export default connect(mapStateToProps)(Offers);