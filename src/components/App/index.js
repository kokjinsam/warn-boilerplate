import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    routes: PropTypes.any.isRequired,
  };

  render() {
    const {
      store,
      history,
      routes,
    } = this.props;

    return (
      <Provider store={store}>
        <Router
          routes={routes}
          history={history}
        />
      </Provider>
    );
  }
}

export default App;
