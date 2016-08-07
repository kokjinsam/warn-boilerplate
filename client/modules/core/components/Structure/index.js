import React, {
  Component,
  PropTypes,
} from 'react';
import Helmet from 'react-helmet';
import cx from 'classnames';
import RouteTransition from '../RouteTransition';
import {
  COLOR_PRIMARY,
} from '../../../../configs/constants';
import styles from './styles';
import useSheet from 'react-jss';

/* eslint-disable no-console */
class Structure extends Component {
  static propTypes = {
    children: PropTypes.any,
    location: PropTypes.object.isRequired,
    sheet: PropTypes.any.isRequired,
  };

  static childContextTypes = {
    reactIconBase: PropTypes.object,
  };

  getChildContext() {
    return {
      reactIconBase: {
        color: '#555555',
        size: 24,
      },
    };
  }

  render() {
    const {
      children,
      sheet,
      location,
    } = this.props;

    const { classes } = sheet;

    const mainClasses = cx({
      [classes.main]: true,
    });

    return (
      <div className={classes.container}>
        <Helmet
          title="NEAR Boilerplate"
          meta={[
            {
              name: 'theme-color',
              content: COLOR_PRIMARY,
            },
          ]}
        />
        <div>
          Appbar
        </div>
        <main
          className={mainClasses}
        >
          <RouteTransition
            pathname={location.pathname}
            transition="slideUp"
          >
            {children}
          </RouteTransition>
        </main>
        <div>
          Footer
        </div>
      </div>
    );
  }
}

export default useSheet(Structure, styles);
