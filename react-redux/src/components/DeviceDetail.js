import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
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

class Device extends React.Component {
    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Devices.detail(this.props.match.params.slug),
        ]));
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        if (!this.props.device) return null;

        return (
            <div className="article-page">
                <h3>Details</h3>
                {
                    this.props.device.map(device => {
                        console.log("MAPDEVICEDETAIL", device);
                        return (
                            <p key={device.slug}>{device.price}</p>
                        )
                    })
                }

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);
