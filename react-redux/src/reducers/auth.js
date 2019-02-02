import {
  LOGIN,
  REGISTER,
  ASYNC_END,
  LOGIN_PAGE_UNLOADED,
  REGISTER_PAGE_UNLOADED,
  ASYNC_START,
  UPDATE_FIELD_AUTH
} from '../constants/actionTypes';

export default (state = {}, action) => {
  console.log("AUTH_REDUCER",action)
  switch (action.type) {
    case LOGIN:
    case ASYNC_END:
      return {
        ...state,
        inProgress: false,
        error: action.promise && action.promise.result ? action.promise.result.error : null 
      };
    case REGISTER:
    console.log("AUTH_REDUCER_REGISTER",action)
      return {
        ...state,
        inProgress: false,
        errors: action.payload.error ? action.payload.error : null
      };
    case LOGIN_PAGE_UNLOADED:
    case REGISTER_PAGE_UNLOADED:
      return {};
    case ASYNC_START:
      if (action.subtype === LOGIN || action.subtype === REGISTER) {
        return { ...state, inProgress: true };
      }
      break;
    case UPDATE_FIELD_AUTH:
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }

  return state;
};
