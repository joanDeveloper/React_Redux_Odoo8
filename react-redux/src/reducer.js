import article from './reducers/article';
import categories from './reducers/categories';
import deviceList from './reducers/deviceList';
import device from './reducers/device';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import contact from './reducers/contact';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  article,
  categories,
  deviceList,
  device,
  auth,
  common,
  editor,
  home,
  contact,
  profile,
  settings,
  form:formReducer,
  router: routerReducer
});
