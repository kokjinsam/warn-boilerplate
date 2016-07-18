import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import reducer from '../rootReducer';

export default function ({
  initialState,
  history,
}) {
  const logger = createLogger();
  const middleware = [
    logger,
    routerMiddleware(history),
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
    module.hot.accept('../rootReducer', () => {
      const nextRootReducer = require('../rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
