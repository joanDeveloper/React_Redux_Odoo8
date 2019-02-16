import {
    DEVICE_PAGE_LOADED,
    DEVICE_PAGE_UNLOADED,
    ADD_COMMENTS,
    GET_COMMENTS
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    console.log("DEVICEREDUCER",action)
    switch (action.type) {
        
      case DEVICE_PAGE_LOADED:
        return {
          ...state,
          device: action.payload[0].result,
          //categories: action.payload[1].result,
        };
      case DEVICE_PAGE_UNLOADED:
        return {};
      case ADD_COMMENTS:
        return {
          ...state,
          comments: action.payload,
          
        };
      case GET_COMMENTS:
        return {
          ...state,
          comments: action.payload.result.comments,
          
        };
      default:
        return state;
    }
  };
  