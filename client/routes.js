import React from 'react';
import {
  IndexRoute,
  Route,
} from 'react-router';
import Layout from './modules/core/components/Layout';
import AppPage from './modules/core/components/AppPage';
import AppPage2 from './modules/core/components/AppPage2';
// import NotFoundPage from './modules/not-found/components/NotFoundPage';

export default function createRoutes() {
  return (
    <Route
      path="/"
      component={Layout}
    >
      <IndexRoute component={AppPage} />
      <Route
        path="/products"
        component={AppPage2}
      />
    </Route>
  );
}
