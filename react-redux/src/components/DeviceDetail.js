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
        <div className="article-page">
            <h3>Details</h3>
            {
                props.device.map(device => {
                    return (
                        <section key={device.slug}>
                            <p>Marca: {device.brand}</p>
                            <p>Modelo: {device.model}</p>
                            <p>Bateria: {device.battery} Mhz</p>
                            <p>Camera: {device.camera} pixels</p>
                            <p>Descripcion: {device.description}</p>
                            <p>Precio: {device.price} €</p>
                            <Comments slug={device.slug}/>
                        </section>
                        
                    )
                })
            }
            
        </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(Device);