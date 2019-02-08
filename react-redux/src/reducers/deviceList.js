import {
    SET_PAGE,
    HOME_PAGE_LOADED,
    HOME_PAGE_UNLOADED,
    HOME_OFFERS
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    switch (action.type) {
      case SET_PAGE:
      console.log("SET PAGEEEEE",action)
        return {
          ...state,
          devices: action.payload.result.listDevices,
          devicesCount: action.payload.result.count,
          currentPage: action.page
        };
      case HOME_PAGE_LOADED:
        return {
          ...state,
          pager: action.pager,
          categories: action.payload[1].result,
          devices: action.payload[0].result.listDevices,
          offers: action.payload[2].result.listDevices,
          devicesCount: action.payload[0].result.count,
          currentPage: 0,
          tab: action.tab
        };
      case HOME_OFFERS:
        return {
          ...state,
          offers:action.payload[0].result.offersDevices
        };
      case HOME_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  