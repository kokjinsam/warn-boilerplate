import React from 'react';
import { Router, Route } from 'react-router';
import AppPage from '../components/AppPage';

const routes = (
  <Router>
    <Route path="/" component={AppPage} />
  </Router>
);

export default routes;
