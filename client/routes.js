import React from 'react';
import {
  IndexRoute,
  Route,
} from 'react-router';
import Structure from './modules/core/components/Structure';
import LaunchPage from './modules/launch/components/LaunchPage';
import ExamplePage from './modules/example/components/ExamplePage';
import NotFoundPage from './modules/not-found/components/NotFoundPage';

export default function createRoutes() {
  return (
    <Route
      path="/"
      component={Structure}
    >
      <IndexRoute component={LaunchPage} />
      <Route
        path="/example"
        component={ExamplePage}
      />
      <Route
        path="*"
        component={NotFoundPage}
      />
    </Route>
  );
}
