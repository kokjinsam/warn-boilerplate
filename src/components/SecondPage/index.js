import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {

};

const SecondPage = () => {
  return (
    <div>
      SecondPage component
      <Link to="/">Home</Link>
    </div>
  );
};

SecondPage.propTypes = propTypes;

export default SecondPage;
