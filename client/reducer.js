import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import apolloClient from './configs/apollo';
import todos from './modules/core/reducers/todos';

const rootReducer = combineReducers({
  router: routerReducer,
  apollo: apolloClient.reducer(),

  // Put all module reducers here
  todos,
});

export default rootReducer;
