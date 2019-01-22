import {
    CATEGORY_PAGE_LOADED,
    CATEGORY_PAGE_UNLOADED,
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    console.log("CATEGORIA_REDUCER",action)
    switch (action.type) {
        
      case CATEGORY_PAGE_LOADED:
        return {
          ...state,
          //categories:action.payload[1].result,
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
  