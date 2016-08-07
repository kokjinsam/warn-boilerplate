import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import reducer from '../reducer';
import apolloClient from '../configs/apollo';

export default function ({
  initialState,
  history,
}) {
  const logger = createLogger();
  const middleware = [
    logger,
    routerMiddleware(history),
    apolloClient.middleware(),
  ];

  const enhancers = [];

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept('../reducer', () => {
      const nextRootReducer = require('../reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
