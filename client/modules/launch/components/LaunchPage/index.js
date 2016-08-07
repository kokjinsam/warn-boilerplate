import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './styles';
import useSheet from 'react-jss';

const propTypes = {
  sheet: PropTypes.any.isRequired,
};

const LaunchPage = ({
  sheet,
}) => {
  const { classes } = sheet;

  return (
    <div className={classes.launchPage}>
      Launch Page

      <Link to="/example">Example Page</Link>
    </div>
  );
};

LaunchPage.propTypes = propTypes;

export default useSheet(LaunchPage, styles);
