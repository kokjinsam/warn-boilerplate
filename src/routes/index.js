import React from 'react';
import { Router, Route } from 'react-router';
import AppPage from '../components/AppPage';
import SecondPage from '../components/SecondPage';

const routes = (
  <Router>
    <Route path="/" component={AppPage} />
    <Route path="/second" component={SecondPage} />
  </Router>
);

export default routes;
