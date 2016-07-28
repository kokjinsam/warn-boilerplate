/* @flow */
import React, { Component, PropTypes } from 'react';
import Counter from '../Counter';
import Layout from '../Layout';
import { Link } from 'react-router';

/* eslint-disable react/prefer-stateless-function */
class AppPage extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render(): React.Element<any> {
    const {
      children,
    } = this.props;

    return (
      <div>
        <Layout>
          <Counter />
        </Layout>
        <Link to="/test">Test yea</Link>
          {children}
      </div>
    );
  }
}

export default AppPage;
