import React, { useEffect } from 'react';
import agent from '../agent';
import DeviceList from './DeviceList';
import { connect } from 'react-redux';
import { CATEGORY_PAGE_LOADED, CATEGORY_PAGE_UNLOADED } from '../constants/actionTypes';

const mapStateToProps = state => ({
    ...state.categories
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, pager) =>
        dispatch({ type: CATEGORY_PAGE_LOADED, pager, payload }),
    onUnload: () =>
        dispatch({ type: CATEGORY_PAGE_UNLOADED })
});

const DevicesByCategory = props => {
    useEffect(() => {
        props.onLoad(Promise.all([
            agent.Devices.byCategory(0, props.match.params.slug),
        ]), agent.Devices.byCategory);
    }, [])

    if (!props.devicesByCategories) return null;
    if (props.devicesByCategory) props.devicesByCategories.listDevicesByCategory = props.devicesByCategory;

    return (
        <div className="article-page" key={props.match.params.slug}>
            <DeviceList
                pager={props.pager}
                devices={props.devicesByCategories.listDevicesByCategory}
                devicesCount={props.devicesByCategories.count}
                currentPage={props.currentPage}
                slug_cat={props.match.params.slug} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DevicesByCategory);
