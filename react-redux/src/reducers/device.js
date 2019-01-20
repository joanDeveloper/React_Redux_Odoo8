import {
    DEVICE_PAGE_LOADED,
    DEVICE_PAGE_UNLOADED,
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    console.log("DEVICEREDUCER",action)
    switch (action.type) {
        
      case DEVICE_PAGE_LOADED:
        return {
          ...state,
          device: action.payload[0].result,
        };
      case DEVICE_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  