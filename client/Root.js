/**
 * DO NOT NEED TO MODIFY
 */
import React, { Component, PropTypes } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router } from 'react-router';
import createRoutes from './routes';

/* eslint-disable react/prefer-stateless-function */
class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    client: PropTypes.any.isRequired,
  };

  render() {
    const {
      store,
      history,
      client,
    } = this.props;

    return (
      <ApolloProvider store={store} client={client}>
        <Router
          routes={createRoutes()}
          history={history}
        />
      </ApolloProvider>
    );
  }
}

export default Root;
