import React, { useEffect, useState } from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import  Comments from './Comments';
import { DEVICE_PAGE_LOADED, DEVICE_PAGE_UNLOADED } from '../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.device,
    currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: DEVICE_PAGE_LOADED, payload }),
    onUnload: () =>
        dispatch({ type: DEVICE_PAGE_UNLOADED })
});

const Device = props => {
    useEffect(() => {
        props.onLoad(Promise.all([
            agent.Devices.detail(props.match.params.slug),
        ]));
    }, [])

    if (!props.device) return null;
    return (
        <section>
            {
                props.device.map(device => {
                    return (
                        <div key={device.slug}>
                            <section className="container-flex">
                                <article>
                                    <img src={`../../media/devices/${device.media}.png`} 
                                        className="device-media" 
                                        alt={`imagen del producto ${device.brand}`} />
                                </article>
                                <article className="device-detail">
                                    <li className="device-detail_list">Marca: {device.brand}</li>
                                    <li className="device-detail_list">Modelo: {device.model}</li>
                                    <li className="device-detail_list">Bateria: {device.battery} Mhz</li>
                                    <li className="device-detail_list">Camera: {device.camera} pixels</li>
                                    <li className="device-detail_list">Descripcion: {device.description}</li>
                                    <li className="device-detail_list">Precio: {device.price} €</li>
                                </article>
                            </section>
                            <Comments id_device={device.id}/>
                        </div>
                    )
                })
            }
        </section>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Device);