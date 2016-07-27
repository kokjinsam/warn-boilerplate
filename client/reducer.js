import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './modules/core/reducers/todos';

const rootReducer = combineReducers({
  router: routerReducer,

  // Put all module reducers here
  todos,
});

export default rootReducer;
