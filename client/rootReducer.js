import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import coreModule from './modules/core';

const rootReducer = combineReducers({
  router: routerReducer,

  // Put all module reducers here
  ...coreModule.reducers,
});

export default rootReducer;
