import React, { Component } from 'react';
import Layout from '../Layout';
import Counter from '../Counter';
import { Link } from 'react-router';

export default class AppPage extends Component {
  render() {
    return (
      <Layout>
        <Counter />
        <Link to="/second">SecondPage</Link>
      </Layout>
    );
  }
}
