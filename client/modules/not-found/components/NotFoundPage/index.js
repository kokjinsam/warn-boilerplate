import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styles from './styles';
import useSheet from 'react-jss';

const propTypes = {
  sheet: PropTypes.any.isRequired,
  style: PropTypes.any.isRequired,
};

const NotFoundPage = ({
  sheet,
  style,
}) => {
  const { classes } = sheet;

  return (
    <div
      className={classes.container}
      style={style}
    >
      <Helmet
        title="Oops, 404 Page Not Found"
      />
      <div className={classes.wrapper}>
        <h1 className={classes.huge404}>404</h1>
        <p className={classes.desc}>Ooops, the page you're looking for doesn't exist</p>
      </div>
    </div>
  );
};

NotFoundPage.propTypes = propTypes;
export default useSheet(NotFoundPage, styles);
