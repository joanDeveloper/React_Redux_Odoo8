import React from 'react';
import DevicePreview from './DevicePreview';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.deviceList
});

const Offers = props => {
    return !props.offers ? null :
        (
            <span>
                <h2 align="center">Nuestras ofertas</h2>
                {
                    props.offers.filter(item => item.oferta != false).map(prod => {
                        return (
                            <section className="container-device" key={prod.slug}>
                                <DevicePreview device={prod} class="device-preview__offers" />
                            </section>
                        )
                    })

                }
            </span>
        );
}
export default connect(mapStateToProps)(Offers);