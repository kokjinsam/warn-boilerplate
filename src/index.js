import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './lib/createReduxStore';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import App from './components/App';
import routes from './routes';

const initialState = (window && window.__INITIAL_STATE__) ? window.__INITIAL_STATE__ : {};

if ((window && window.__INITIAL_STATE__)) {
  delete window.__INITIAL_STATE__;
}

const store = createStore({
  initialState,
  history: browserHistory,
});

const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router,
});

const MOUNT_NODE = document.getElementById('app');
ReactDOM.render(
  <AppContainer>
    <App
      store={store}
      history={history}
      routes={routes}
    />
  </AppContainer>,
  MOUNT_NODE
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp
          store={store}
          history={history}
          routes={routes}
        />
      </AppContainer>,
      MOUNT_NODE
    );
  });
}
