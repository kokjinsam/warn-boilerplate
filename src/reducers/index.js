import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const rootReducer = combineReducers({
  router: routerReducer,
  todos,
  visibilityFilter,
});

export default rootReducer;
