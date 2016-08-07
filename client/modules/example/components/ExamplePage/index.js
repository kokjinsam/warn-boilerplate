import React, { PropTypes } from 'react';
import styles from './styles';
import useSheet from 'react-jss';

const propTypes = {
  sheet: PropTypes.any.isRequired,
};

const ExamplePage = ({
  sheet,
}) => {
  const { classes } = sheet;

  return (
    <div className={classes.example}>
      Example Page
    </div>
  );
};

ExamplePage.propTypes = propTypes;

export default useSheet(ExamplePage, styles);
