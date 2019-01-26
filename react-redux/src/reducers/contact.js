import {
    CONTACT_PAGE_UNLOADED,
    UPDATE_FIELD_CONTACT,
    CONTACT,
    ASYNC_START
  } from '../constants/actionTypes';
  
  export default (state = {}, action) => {
    
    switch (action.type) {
      case CONTACT:
      console.log("RED_CONTACT",action.payload.error);
        return {
          ...state,
          inProgress: false,
          errors: action.payload.error ? action.payload.error : undefined
        };
      case CONTACT_PAGE_UNLOADED:
        return {};
      case ASYNC_START:
        if (action.subtype === CONTACT) {
          return { ...state, inProgress: true };
        }
        break;
      case UPDATE_FIELD_CONTACT:
        return { ...state, [action.key]: action.value };
      default:
        return state;
    }
  
    return state;
  };
  