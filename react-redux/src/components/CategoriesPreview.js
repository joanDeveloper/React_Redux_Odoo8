import React from 'react';
import agent from '../agent';
import DeviceList from './DeviceList';
import CategoriesList from './CategoriesList';
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

class CategoriesPreview extends React.Component {
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
                
        return (
            <div className="article-page">
                <DeviceList
                    pager={this.props.currentPage}
                    devices={this.props.devicesByCategories.listDevicesByCategory}
                    devicesCount={this.props.devicesByCategories.count}
                    currentPage={this.props.pager} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesPreview);
