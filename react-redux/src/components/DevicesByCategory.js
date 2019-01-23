import React from 'react';
import agent from '../agent';
import DeviceList from './DeviceList';
import { connect } from 'react-redux';
import { CATEGORY_PAGE_LOADED, CATEGORY_PAGE_UNLOADED } from '../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.categories
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload,pager) =>
        dispatch({ type: CATEGORY_PAGE_LOADED, pager, payload }),
    onUnload: () =>
        dispatch({ type: CATEGORY_PAGE_UNLOADED })
});

class DevicesByCategory extends React.Component {
    componentWillMount() {
        this.props.onLoad(Promise.all([
            agent.Devices.byCategory(0,this.props.match.params.slug),
        ]),agent.Devices.byCategory);
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        console.log("PROPS_CAT_PREVIEW",this.props)
        if (!this.props.devicesByCategories) return null;
        if (this.props.devicesByCategory) this.props.devicesByCategories.listDevicesByCategory = this.props.devicesByCategory;
                
        return (
            <div className="article-page">
                <DeviceList
                    pager={this.props.pager}
                    devices={this.props.devicesByCategories.listDevicesByCategory}
                    devicesCount={this.props.devicesByCategories.count}
                    currentPage={this.props.currentPage}
                    slug_cat={this.props.match.params.slug} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesByCategory);
