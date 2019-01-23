import {
    CATEGORY_PAGE_LOADED,
    CATEGORY_PAGE_UNLOADED,
    SET_PAGE
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    console.log("CATEGORIA_REDUCER",action)
    switch (action.type) {
      case SET_PAGE:
      console.log("SET PAGE_CATEGORIA_REDUCER",action)
        return {
          ...state,
          devicesByCategory: action.payload.result.listDevicesByCategory,
        };
      case CATEGORY_PAGE_LOADED:
        return {
          ...state,
          devicesByCategories: action.payload[0].result,
          currentPage: 0,
          pager:action.pager
        };
      case CATEGORY_PAGE_UNLOADED:
        return {};
      default:
        return state;
    }
  };
  