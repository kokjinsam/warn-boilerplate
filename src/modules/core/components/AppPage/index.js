import React, { Component } from 'react';
import Counter from '../Counter';
import Layout from '../Layout';
import { Link } from 'react-router';

/* eslint-disable */
class AppPage extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Counter />
        </Layout>
        <Link to="/test">Test</Link>
        {this.props.children}
      </div>
    );
  }
}
/* eslint-enable */
export default AppPage;
