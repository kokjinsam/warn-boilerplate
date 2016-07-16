import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function ({
  initialState,
}) {
  const logger = createLogger();
  const middleware = [
    thunk,
    logger,
  ];

  const enhancers = [];
  /*
  if (__DEBUG__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }
  */

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
    module.hot.accept('../reducers', () => {
      const { reducer: nextReducer } = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
