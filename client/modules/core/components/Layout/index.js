import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.any.isRequired,
};

const Layout = ({ children }) => (
  <div>
    <h1>Hello, world!</h1>
    {children}
  </div>
);

Layout.propTypes = propTypes;

export default Layout;
