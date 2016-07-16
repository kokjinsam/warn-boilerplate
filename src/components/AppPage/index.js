import React, { Component } from 'react';
import Layout from '../Layout';
import Counter from '../Counter';

export default class AppPage extends Component {
  render() {
    return (
      <Layout>
        <Counter />
      </Layout>
    );
  }
}
